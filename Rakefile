# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

if Rails.env.production?
  Rake::Task['assets:precompile'].enchance do
    Rake::Task["lookbook:previews:preparse"].invoke
  end
end
