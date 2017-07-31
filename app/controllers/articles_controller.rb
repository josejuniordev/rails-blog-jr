class ArticlesController < ApplicationController
  def index
  end

  def create
    @article = Article.new(article_params)
    @article.slug = @article.title.parameterize
    @article.save
    redirect_to '/articles/' + @article.slug.to_s
  end

  def new
  @article = Article.new
  end

  def edit
    @article = Article.find_by(slug: params[:slug])
  end

  def show
    @article = Article.find_by(slug: params[:slug])
  end

  def update
    @article = Article.find_by(slug: params[:slug])
    if !@article.update(article_params)
      render 'edit'
    end
  end

  def destroy
    @article = Article.find_by(slug: params[:slug])
    @article.destroy

    respond_to do |format|
      format.js
      format.html { redirect_to(root_url) }
    end
  end

  private
  def article_params
    params.require(:article)
      .permit(:title, :content, :slug)
  end
end
