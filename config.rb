require 'terser'

set :title, "Starter Kit | Middleman + Bootstrap"

activate :sprockets
activate :directory_indexes

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript, compressor: Terser.new
  activate :asset_hash
  activate :relative_assets
end
