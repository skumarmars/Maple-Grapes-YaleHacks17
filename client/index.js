


$('#searchBtn').click(() => {
    clearDateFromPreviousQuery($('#contentContainer'))
    $('.preloader-wrapper').addClass('active')
    setTimeout(displayContainerInAFancyWay, 1500);
    initializeChart();
})


clearDateFromPreviousQuery = (x) => {
    x.empty()
}

displayContainerInAFancyWay = () => {
    $('#contentContainer').hide()
    initializeData()
    $('.preloader-wrapper').removeClass('active')
    $('#contentContainer').fadeIn()
}
initializeData = () => {
    const itemCount = 6;
    const fields = ["Machine Learning", "Artificial Intelligence", "Blockchain", "Biometrics", "Internet of Things", "Augmented Reality"];
    for (var i = 0; i < itemCount; i ++) {
        $('#contentContainer').append(`
            <div class="col m4">
                <div class="card">
                    <div class="card-image">
                        <img src="place.png">
                        <span class="card-title">${fields[i]}</span>
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

initializeChart = () => {
    const industry = "tech";
    const field = "ml";
    $.get(`http://localhost:3000/${industry}/${field}`, (data) => {
        const x = []
        const y = []
        data.forEach((e) => {
            x.push(e.week)
            y.push(e.trend)
        })
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: x,
                datasets: [
                        {
                        label: "Machine Learning",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: y
                    },
                ]
            },
        
            // Configuration options go here
            options: {}
        });
    })
}