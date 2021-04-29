class User < ApplicationRecord
    validates :initials, presence: true
    validates :clicks, presence: true

    scope :top20, -> { order('clicks asc').limit(20)}
end
