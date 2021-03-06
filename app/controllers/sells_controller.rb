class SellsController < ApplicationController
  before_action :current_user_check,       only: [:edit, :update, :delete]
  before_action :set_product,              only: [:edit, :update, :show]
  before_action :set_breadcrumb

  def new
    @sell = Product.new
    @sell.images.new
    @categories = Category.all
    @shippings = Shipping.all
  end

  def create
    @sell = Product.new(product_params)
    if @sell.save
      flash.now[:notice] = '出品完了しました。'
    else
      redirect_to new_sell_path, flash: {alert: '再度入力してください'}
    end
  end

  def show
    @product = Product.new
    @categories = Category.all
    add_breadcrumb "商品詳細", sell_path(params[:id])
  end

  def edit
    @categories = Category.all
    @shippings = Shipping.all
  end

  def update
    if params[:product].keys.include?("image") || params[:product].keys.include?("images_attributes") 
      if @sell.valid?
        if params[:product].keys.include?("image") 
          update_images_ids = params[:product][:image].values
          before_images_ids = @sell.images.ids
          before_images_ids.each do |before_img_id|
            Image.find(before_img_id).destroy unless update_images_ids.include?("#{before_img_id}") 
          end
        else
          before_images_ids = @sell.images.ids
          before_images_ids.each do |before_img_id|
            Image.find(before_img_id).destroy 
          end
        end

        if @sell.update(product_params)
          redirect_to sell_path(@sell), notice: "商品を更新しました"
        else
          render 'edit'
        end
      else
        render 'edit'
      end
    else
      redirect_back(fallback_location: root_path,flash: {alert: '画像がありません'})
    end
    
  end

  def select_category_middle
    @middle_categories = Category.where(ancestry: params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end

  def select_category_small
    @small_categories = Category.find(params[:keyword]).children
    respond_to do |format|
      format.html
      format.json
    end
  end
  
  def destroy
    sell = Product.find(params[:id])
    unless sell.destroy
      flash.now[:alert] = '削除は完了していません。'
      respond_to sell_path(sell)
    end
  end


  def select_shipping_method
    @shipping_method = Shipping.where(ancestry: params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :category_id, :shipping_id, :shipping_where, :shipping_day, :size, :price, :condition, brand_attributes:[:name], images_attributes: [:name, :_destroy, :id]).merge(user_id: current_user.id)
  end

  def set_product
    @sell = Product.find(params[:id])
  end

  def current_user_check
    @product_id = Product.find(params[:id]).user_id
    @current_user_id = current_user.id
    redirect_to root_path unless @product_id == @current_user_id
  end

  def set_breadcrumb
    add_breadcrumb "フリマ", :root_path
  end
end
