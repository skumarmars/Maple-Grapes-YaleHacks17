


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
    $.get(`http://localhost:3000/${industry}`, (data) => {
        const xml = [];
        const yml = [];
        const xai = [];
        const yai = [];
        data.techml.forEach((e) => {
            xml.push(e.week)
            yml.push(e.trend)
        })
        data.techai.forEach((e) => {
            xai.push(e.week)
            yai.push(e.trend)
        })
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: xml,
                datasets: [
                        {
                        label: "Machine Learning",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: yml
                    },
                    {
                        label: "Artificial Intelligence",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(65, 99, 22)',
                        data: yai
                    },
                ]
            },
        
            // Configuration options go here
            options: {}
        });
    })
}