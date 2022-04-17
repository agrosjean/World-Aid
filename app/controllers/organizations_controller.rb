class OrganizationsController < ApplicationController

    def show
        @organization = Organization.find(params[:id])
        render json: @organization
    end

    def index
        @organizations = Organization.all
        render json: @organizations
    end
end