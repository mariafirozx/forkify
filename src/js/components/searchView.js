class SearchView{

    _parent = document.querySelector('.search');
    
    _clearInput(){
        return this._parent.querySelector('.search__field').value = '';
    }

    getQuery(){
        const res= this._parent.querySelector('.search__field').value;
        this._clearInput();
        return res;
    }

    addHandlerSearch(handler){
        this._parent.addEventListener('submit', function(e){
            e.preventDefault();
            handler();
        })
    }

}

export default new SearchView();