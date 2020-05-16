class User < ApplicationRecord
  devise :confirmable,
         :database_authenticatable,
         :recoverable,
         :registerable,
         :rememberable,
         :validatable,
         reconfirmable: true
end
