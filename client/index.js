


$('#searchBtn').click(() => {
    clearDateFromPreviousQuery($('#contentContainer'))
    $('.preloader-wrapper').addClass('active')
    $('#contentContainer').hide()
    initializeData()
})


clearDateFromPreviousQuery = (x) => {
    x.empty()
}

initializeData = () => {
    const industry = $('#industrySelect').val();
    const keyword = $('#searchInput').val();
    const scores = [
        96.53,
        96.12,
        77.67,
        77.05,
        98.42,
        71.49
    ]
    $.ajax({
        url: 'http://localhost:3000/industry',
        data: {
            industry,
            keyword
        },
        method: 'post'
    }).then((data) => {
        for (var i = 0; i < data.length; i ++) {
            $('#contentContainer').append(`
                <div class="col m4">
                    <div class="card">
                        <div class="card-header">
                            <span class="card-title">${data[i].field}</span>
                        </div>
                        <div class="card-action">
                            <span>Article:</span><br>
                            <a href="${data[i].url}">${data[i].title}</a>
                        </div>
                        <div class="card-action">
                            <span>Research:</span><br>
                            <a href="${data[i].researchUrl}">${data[i].researchTitle}</a>
                        </div>
                        <div class="card-action">
                            <span>Company:</span><br>
                            <a href="${data[i].startupUrl}">${data[i].startupTitle}</a>
                        </div>
                        <div class="card-footer">
                            <span class="score">${scores[i]}</span>
                        </div>
                    </div>
                </div>
            `)
        }
        $('.score').forEach((e) => {
            if ($(e).text() >= 90) {
                $(e).parent().addClass('large')
            } else if ($(e).text() >= 80 && $(e).text() < 90) {
                $(e).parent().addClass('med')
            } else if ($(e).text() < 80 ) {
                $(e).parent().addClass('small')
            }
        })
        $('.preloader-wrapper').removeClass('active')
        $('#contentContainer').fadeIn()
        initializeChart();
    })
}

initializeChart = () => {
    const industry = "tech";
    const field = "ml";
    $.get(`http://localhost:3000/${industry}`, (data) => {
        const xml = [];
        const yml = [];
        const xai = [];
        const yai = [];
        const xar = [];
        const yar = [];
        const xbc = [];
        const ybc = [];
        data.techml.forEach((e) => {
            xml.push(e.week)
            yml.push(e.trend)
        })
        data.techai.forEach((e) => {
            xai.push(e.week)
            yai.push(e.trend)
        })
        data.techar.forEach((e) => {
            xar.push(e.week)
            yar.push(e.trend)
        })
        data.techbc.forEach((e) => {
            xbc.push(e.week)
            ybc.push(e.trend)
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
                    {
                        label: "Augmented Reality",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(22, 99, 22)',
                        data: yar
                    },
                    {
                        label: "Blockchain",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(65, 124, 192)',
                        data: ybc
                    },
                ]
            },
        
            // Configuration options go here
            options: {}
        });
    })
}