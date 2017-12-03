


$('#searchBtn').click(() => {
    clearDateFromPreviousQuery($('#contentContainer'))
    $('.loaderSection').addClass('active')
    $('#contentContainer').hide()
    $('.chartContainer').hide();
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
        98.42,
        82.67,
        77.05,
        71.49
    ]
    var multiplier =   Math.random() * (1 - 0.9) + 0.9;
    var NewScores = []
    for (var i = 0; i < scores.length; i++) {
        NewScores.push(Math.ceil(scores[i] * multiplier))
    }
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
                            <a target="_blank" href="${data[i].url}">${data[i].title}</a>
                        </div>
                        <div class="card-action">
                            <span>Research:</span><br>
                            <a target="_blank" href="${data[i].researchUrl}">${data[i].researchTitle}</a>
                        </div>
                        <div class="card-action">
                            <span>Company:</span><br>
                            <a target="_blank" href="${data[i].startupUrl}">${data[i].startupTitle}</a>
                        </div>
                        <div class="card-footer">
                            <span class="score">${NewScores[i]}</span>
                        </div>
                    </div>
                </div>
            `)
        }
        
        for (var i = 0; i < $('.score').length; i ++) {
            var self = $($('.score')[i]);
            var num = Number(self.text());
            if (num >= 90) {
                self.parent().addClass('large')
            } else if (num >= 80 && num < 90) {
                self.parent().addClass('med')
            } else {
                self.parent().addClass('small')
            }
        }
        $('.loaderSection').removeClass('active')
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
        $('.chartContainer').fadeIn();
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
                        borderColor: '#42A5F5',
                        data: yai
                    },
                    {
                        label: "Augmented Reality",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(22, 99, 22)',
                        data: yar
                    },
                ]
            },
        
            // Configuration options go here
            options: {}
        });
    })
}