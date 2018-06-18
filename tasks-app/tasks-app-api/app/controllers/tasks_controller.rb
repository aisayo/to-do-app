class TasksController < ApplicationController
    before_action :set_task, only: [:show, :update, :destroy]

    def index
        tasks = Task.all
        render json: tasks 
    end

    def create
        task = Task.new(task_params)
        if task.save 
            render json: task
        else 
            render json: { message: task.errors }, status: 400
        end
    end

    def show
        render json: task
    end 

    def update 
        if task.update(task_params)
            render json: task
        else 
            render json: { message: task.errors }, status: 400
        end
    end 

    def destroy 
        if task.destroy
            render status: 204
        else 
            render json: { message: "Unsuccessful Delete" }, status: 400 
        end
    end 

    private

    def set_task
        task = Task.find_by(id: params[:id])
    end

    def task_params
        params.require(:task).permit(:title, :id, :completed)
    end
end
