require 'bundler/capistrano'
require 'rvm/capistrano'
set :rvm_ruby_string, '1.9.3'
set :rvm_type, :system

set :application, "Goluptious"
set :repository,  "git@github.com:zjr/goluptio.us.git"

set :scm, :git

set :scm_passphrase, ""
set :user, "deploy"
set :deploy_to, "/home/deploy/sites/glumptio.us"

server "nietzche.zjr.io", :app, :web, :db, :primary => true

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "cd #{latest_release} && bundle exec rake assets:precompile"
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
