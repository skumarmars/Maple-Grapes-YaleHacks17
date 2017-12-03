


$('#searchBtn').click(() => {
    clearDateFromPreviousQuery($('#contentContainer'))
    $('.preloader-wrapper').addClass('active')
    setTimeout(displayContainerInAFancyWay, 1500);
    initializeDataTable();
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
loopArray = (data, arraySet, key) => {
    data.forEach((e) => {
        if (key.split(" ").length >= 2) {
            arraySet.push(e[key])
        } else {
            arraySet.push(e.key)
        }
            
    })
    console.log(arraySet, key)
}

initializeDataTable = () => {
    $.get('http://localhost:3000/api/test', (data) => {
        var weeks = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        loopArray(data, weeks, "Week")
        loopArray(data, data1, 'Machine learning')
        loopArray(data, data2, 'Blockchain')
        loopArray(data, data3, 'Internet of Things')
        loopArray(data, data4, 'Biometrics')
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: weeks,
                datasets: [
                        {
                        label: "Machine Learning",
                        backgroundColor: 'rgba(255, 255, 255,0)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data1
                    },
                    {
                        label: "Biometrics",
                        backgroundColor: 'rgba(255, 99, 132, 0)',
                        borderColor: 'rgb(21, 99, 132)',
                        data: data3
                    },
                    {
                        label: "Blockchain",
                        backgroundColor: 'rgba(255, 99, 132, 0)',
                        borderColor: 'rgb(21, 22, 132)',
                        data: data2
                    },
                    {
                        label: "Internet Of Things",
                        backgroundColor: 'rgba(255, 99, 132, 0)',
                        borderColor: 'rgb(21, 192, 132)',
                        data: data4
                    }
                ]
            },
        
            // Configuration options go here
            options: {}
        });
    })
    
}