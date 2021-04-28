class User < ApplicationRecord
    validates :initials, presence: true
    validates :clicks, presence: true
end
