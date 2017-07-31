class Article < ActiveRecord::Base
	validates :title, presence: {message: 'O título é obrigatório'},
			length: {minimum: 5, too_short: 'O titulo é muito curto.'}
end
