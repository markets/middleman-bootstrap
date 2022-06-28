module CustomHelpers
  def is_page?(path)
    current_page.path.include?(path)
  end
end
