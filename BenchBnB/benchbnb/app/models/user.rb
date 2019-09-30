class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token
  attr_reader :password

  def find_by_credentials(user)
    user = User.find(user.id)
    # return nil unless user  
    user && user.is_password?(password) ? user : nil  
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token 
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

end
