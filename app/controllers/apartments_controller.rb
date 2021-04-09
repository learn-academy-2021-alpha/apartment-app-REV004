class ApartmentsController < ApplicationController
    def index
        apartments=Apartment.all
        render json: apartments
      end
    
      def show
        apartment=Apartment.find(params[:id])
        rend json: apartments
      end
    
      def create
        apartment=Apartment.create(apartment_params)
        if apartment.valid?
          render json: apartment
        else
          render json: apartment.errors
        end
      end
    
      private
      def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
      end
    
    end
    
end
