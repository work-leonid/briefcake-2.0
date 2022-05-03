class ButtonComponentPreview < ViewComponent::Preview
  def with_default_title
    render(ButtonComponent.new(title: "hey"))
  end

  def with_short_title 
    render(ButtonComponent.new(title: "i"))
  end

  def with_dynamic_title(title: "default")
    render(ButtonComponent.new(title:title))
  end
end
