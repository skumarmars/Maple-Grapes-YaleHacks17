


$('#searchBtn').click(() => {
    clearDateFromPreviousQuery($('#contentContainer'))
    $('.preloader-wrapper').addClass('active')
    setTimeout(displayContainerInAFancyWay, 1500)
})


clearDateFromPreviousQuery = (x) => {
    x.empty()
}
displayContainerInAFancyWay = () => {
    initializeData()
    $('.preloader-wrapper').removeClass('active')
    $('#contentContainer').fadeIn()
}
initializeData = () => {
    const itemCount = 6;
    for (var i = 0; i < itemCount; i ++) {
        $('#contentContainer').append(`
            <div class="col m4">
                <div class="card">
                    <div class="card-image">
                        <img src="place.png">
                        <span class="card-title">Card Title</span>
                    </div>
                    <div class="card-content">
                        <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                    </div>
                    <div class="card-action">
                        <span>Article:</span><br>
                        <a href="#">This is a link</a>
                    </div>
                    <div class="card-action">
                        <span>Research:</span><br>
                        <a href="#">This is a link</a>
                    </div>
                    <div class="card-action">
                        <span>Company:</span><br>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        `)
    }
}
