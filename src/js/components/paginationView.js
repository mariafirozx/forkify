import View from './View.js';
import icons from 'url:../../img/icons.svg'; 



class paginationView extends View{
    _parentEl = document.querySelector('.pagination');



    addhandlerClick(handler){
        this._parentEl.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline'); //search for closesst el itself
            if(!btn) return;
            console.log(btn);
            const goToPage = +btn.dataset.goto;
            
            handler(goToPage);

        })

    }

    _generateMarkup(){
        const currPage = this._data.page;
        const num_pages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        //first scenario: page 1 , & there are other pages
        if(currPage === 1 && num_pages > 1){
            return `
                <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${currPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                 </button>
            `
        }
        //Last page
        if(currPage === num_pages && num_pages > 1){
            return `
                <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
            `
        }
        //other pages
        if(currPage < num_pages){
            return `
             <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>

              <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${currPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
        `
        }

         //Page 1, & there are no other pages
         return '';

    }

}

export default new paginationView();