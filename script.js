// all station data
const stations = [
    { station: 'aacd-servidor', name: 'Aacd Servidor', line: ['lilas'], lat: -23.5978246, lon: -46.652374, neigh: ['moema', 'hospital-sao-paulo'] },
    { station: 'adolfo-pinheiro', name: 'Adolfo Pinheiro', line: ['lilas'], lat: -23.6500726, lon: -46.7042057, neigh: ['largo-treze', 'alto-da-boa-vista'] },
    { station: 'alto-da-boa-vista', name: 'Alto Da Boa Vista', line: ['lilas'], lat: -23.6416251, lon: -46.6994344, neigh: ['adolfo-pinheiro', 'borba-gato'] },
    { station: 'alto-do-ipiranga', name: 'Alto Do Ipiranga', line: ['verde'], lat: -23.6022366, lon: -46.6124857, neigh: ['santos-imigrantes', 'sacoma'] },
    { station: 'ana-rosa', name: 'Ana Rosa', line: ['azul', 'verde'], lat: -23.5818713, lon: -46.6381039, neigh: ['paraiso', 'vila-mariana', 'paraiso', 'chacara-klabin'] },
    { station: 'anhangabau', name: 'Anhangabau', line: ['vermelha'], lat: -23.5478254, lon: -46.63918, neigh: ['se', 'republica'] },
    { station: 'armenia', name: 'Armenia', line: ['azul'], lat: -23.5254103, lon: -46.629258965, neigh: ['portuguesa-tiete', 'tiradentes'] },
    { station: 'artur-alvim', name: 'Artur Alvim', line: ['vermelha'], lat: -23.5402438, lon: -46.4847063, neigh: ['corinthians-itaquera', 'patriarca-vila-re'] },
    { station: 'belem', name: 'Belem', line: ['vermelha'], lat: -23.5428718, lon: -46.589615, neigh: ['tatuape', 'bresser-mooca'] },
    { station: 'borba-gato', name: 'Borba Gato', line: ['lilas'], lat: -23.6334661, lon: -46.6928675, neigh: ['alto-da-boa-vista', 'brooklin'] },
    { station: 'bras', name: 'Bras', line: ['vermelha'], lat: -23.5453263, lon: -46.6164435, neigh: ['bresser-mooca', 'pedro-ii'] },
    { station: 'bresser-mooca', name: 'Bresser Mooca', line: ['vermelha'], lat: -23.5463606, lon: -46.6071519, neigh: ['belem', 'bras'] },
    { station: 'brigadeiro', name: 'Brigadeiro', line: ['verde'], lat: -23.5677281, lon: -46.6489369, neigh: ['trianon-masp', 'paraiso'] },
    { station: 'brooklin', name: 'Brooklin', line: ['lilas'], lat: -23.6268017, lon: -46.6881279, neigh: ['borba-gato', 'eucaliptos'] },
    { station: 'butanta', name: 'Butanta', line: ['amarela'], lat: -23.5718995, lon: -46.7080896, neigh: ['sao-paulo-morumbi', 'pinheiros'] },
    { station: 'camilo-haddad', name: 'Camilo Haddad', line: ['prata'], lat: -23.59551685, lon: -46.5375900881897, neigh: ['sao-lucas', 'vila-tolstoi'] },
    { station: 'campo-limpo', name: 'Campo Limpo', line: ['lilas'], lat: -23.649246, lon: -46.7589296, neigh: ['capao-redondo', 'vila-das-belezas'] },
    { station: 'capao-redondo', name: 'Capao Redondo', line: ['lilas'], lat: -23.6591689, lon: -46.7680006, neigh: ['campo-limpo'] },
    { station: 'carandiru', name: 'Carandiru', line: ['azul'], lat: -23.5095466, lon: -46.6249771474585, neigh: ['santana', 'portuguesa-tiete'] },
    { station: 'carrao', name: 'Carrao', line: ['vermelha'], lat: -23.5378874, lon: -46.5642624, neigh: ['penha', 'tatuape'] },
    { station: 'chacara-klabin', name: 'Chacara Klabin', line: ['lilas', 'verde'], lat: -23.5926813, lon: -46.6306807, neigh: ['santa-cruz', 'ana-rosa', 'santos-imigrantes'] },
    { station: 'clinicas', name: 'Clinicas', line: ['verde'], lat: -23.5541125, lon: -46.6730048, neigh: ['santuario-nossa-senhora-de-fatima-sumare', 'consolacao'] },
    { station: 'conceicao', name: 'Conceicao', line: ['azul'], lat: -23.6350111, lon: -46.641295, neigh: ['sao-judas', 'jabaquara'] },
    { station: 'consolacao', name: 'Consolacao', line: ['verde'], lat: -23.5581208, lon: -46.6602193, neigh: ['clinicas', 'trianon-masp'] },
    { station: 'corinthians-itaquera', name: 'Corinthians Itaquera', line: ['vermelha'], lat: -23.5422994, lon: -46.4712065, neigh: ['artur-alvim'] },
    { station: 'eucaliptos', name: 'Eucaliptos', line: ['lilas'], lat: -23.6097955, lon: -46.668617, neigh: ['brooklin', 'moema'] },
    { station: 'faria-lima', name: 'Faria Lima', line: ['amarela'], lat: -23.5672551, lon: -46.6939585, neigh: ['pinheiros', 'fradique-coutinho'] },
    { station: 'fradique-coutinho', name: 'Fradique Coutinho', line: ['amarela'], lat: -23.5662284, lon: -46.6841386, neigh: ['faria-lima', 'oscar-freire'] },
    { station: 'giovanni-gronchi', name: 'Giovanni Gronchi', line: ['lilas'], lat: -23.6439301, lon: -46.7339828, neigh: ['vila-das-belezas', 'santo-amaro'] },
    { station: 'guilhermina-esperanca', name: 'Guilhermina Esperanca', line: ['vermelha'], lat: -23.5293046, lon: -46.5166401, neigh: ['patriarca-vila-re', 'vila-matilde'] },
    { station: 'higienopolis-mackenzie', name: 'Higienopolis Mackenzie', line: ['amarela'], lat: -23.5489592, lon: -46.6523049, neigh: ['paulista', 'republica'] },
    { station: 'hospital-sao-paulo', name: 'Hospital Sao Paulo', line: ['lilas'], lat: -23.5983051, lon: -46.6455771, neigh: ['aacd-servidor', 'santa-cruz'] },
    { station: 'jabaquara', name: 'Jabaquara', line: ['azul'], lat: -23.6463382, lon: -46.6410462, neigh: ['conceicao'] },
    { station: 'japao-liberdade', name: 'Japao Liberdade', line: ['azul'], lat: -23.5551768, lon: -46.6356017, neigh: ['se', 'sao-joaquim'] },
    { station: 'jardim-sao-paulo-ayrton-senna', name: 'Jardim Sao Paulo Ayrton Senna', line: ['azul'], lat: -23.4922867, lon: -46.6188575, neigh: ['parada-inglesa', 'santana'] },
    { station: 'largo-treze', name: 'Largo Treze', line: ['lilas'], lat: -23.6544576, lon: -46.7101664, neigh: ['santo-amaro', 'adolfo-pinheiro'] },
    { station: 'luz', name: 'Luz', line: ['amarela', 'azul'], lat: -23.5360593, lon: -46.6341812, neigh: ['republica', 'tiradentes', 'sao-bento'] },
    { station: 'marechal-deodoro', name: 'Marechal Deodoro', line: ['vermelha'], lat: -23.5339809, lon: -46.6558993, neigh: ['santa-cecilia', 'palmeiras-barra-funda'] },
    { station: 'moema', name: 'Moema', line: ['lilas'], lat: -23.603776, lon: -46.6621333, neigh: ['eucaliptos', 'aacd-servidor'] },
    { station: 'oratorio', name: 'Oratorio', line: ['prata'], lat: -23.58213475, lon: -46.5618087904539, neigh: ['vila-prudente', 'sao-lucas'] },
    { station: 'oscar-freire', name: 'Oscar Freire', line: ['amarela'], lat: -23.5607503, lon: -46.6720286, neigh: ['fradique-coutinho', 'paulista'] },
    { station: 'palmeiras-barra-funda', name: 'Palmeiras Barra Funda', line: ['vermelha'], lat: -23.5254616, lon: -46.6675134, neigh: ['marechal-deodoro'] },
    { station: 'parada-inglesa', name: 'Parada Inglesa', line: ['azul'], lat: -23.4870316, lon: -46.6088003521677, neigh: ['tucuruvi', 'jardim-sao-paulo-ayrton-senna'] },
    { station: 'paraiso', name: 'Paraiso', line: ['azul', 'verde'], lat: -23.5753983, lon: -46.6408061, neigh: ['vergueiro', 'ana-rosa', 'brigadeiro'] },
    { station: 'patriarca-vila-re', name: 'Patriarca Vila Re', line: ['vermelha'], lat: -23.5311445, lon: -46.5036382, neigh: ['artur-alvim', 'guilhermina-esperanca'] },
    { station: 'paulista', name: 'Paulista', line: ['amarela'], lat: -23.5552461, lon: -46.6622682, neigh: ['oscar-freire', 'higienopolis-mackenzie'] },
    { station: 'pedro-ii', name: 'Pedro II', line: ['vermelha'], lat: -23.5496994, lon: -46.6259819, neigh: ['bras', 'se'] },
    { station: 'penha', name: 'Penha', line: ['vermelha'], lat: -23.5334949, lon: -46.5426688, neigh: ['vila-matilde', 'carrao'] },
    { station: 'pinheiros', name: 'Pinheiros', line: ['amarela'], lat: -23.567249, lon: -46.7019515, neigh: ['butanta', 'faria-lima'] },
    { station: 'portuguesa-tiete', name: 'Portuguesa Tiete', line: ['azul'], lat: -23.51614455, lon: -46.6251494423778, neigh: ['carandiru', 'armenia'] },
    { station: 'praca-da-arvore', name: 'Praca Da Arvore', line: ['azul'], lat: -23.6105051, lon: -46.6379193, neigh: ['santa-cruz', 'saude'] },
    { station: 'republica', name: 'Republica', line: ['amarela', 'vermelha'], lat: -23.5440945, lon: -46.642665, neigh: ['higienopolis-mackenzie', 'luz', 'anhangabau', 'santa-cecilia'] },
    { station: 'sacoma', name: 'Sacoma', line: ['verde'], lat: -23.6012824, lon: -46.6025552, neigh: ['alto-do-ipiranga', 'tamanduatei'] },
    { station: 'santa-cecilia', name: 'Santa Cecilia', line: ['vermelha'], lat: -23.5381047, lon: -46.6489997, neigh: ['republica', 'marechal-deodoro'] },
    { station: 'santa-cruz', name: 'Santa Cruz', line: ['azul', 'lilas'], lat: -23.5989383, lon: -46.6388672, neigh: ['vila-mariana', 'praca-da-arvore', 'hospital-sao-paulo', 'chacara-klabin'] },
    { station: 'santana', name: 'Santana', line: ['azul'], lat: -23.50258755, lon: -46.6252175408741, neigh: ['jardim-sao-paulo-ayrton-senna', 'carandiru'] },
    { station: 'santo-amaro', name: 'Santo Amaro', line: ['lilas'], lat: -23.6562303, lon: -46.7191156, neigh: ['giovanni-gronchi', 'largo-treze'] },
    { station: 'santos-imigrantes', name: 'Santos Imigrantes', line: ['verde'], lat: -23.5958959, lon: -46.6207594, neigh: ['chacara-klabin', 'alto-do-ipiranga'] },
    { station: 'santuario-nossa-senhora-de-fatima-sumare', name: 'Santuario Nossa Senhora De Fatima Sumare', line: ['verde'], lat: -23.5507519, lon: -46.6800962, neigh: ['vila-madalena', 'clinicas'] },
    { station: 'sao-bento', name: 'Sao Bento', line: ['azul'], lat: -23.5443802, lon: -46.6363175, neigh: ['luz', 'se'] },
    { station: 'sao-joaquim', name: 'Sao Joaquim', line: ['azul'], lat: -23.5613673, lon: -46.6386013, neigh: ['japao-liberdade', 'vergueiro'] },
    { station: 'sao-judas', name: 'Sao Judas', line: ['azul'], lat: -23.6258085, lon: -46.6409209, neigh: ['saude', 'conceicao'] },
    { station: 'sao-lucas', name: 'Sao Lucas', line: ['prata'], lat: -23.58882605, lon: -46.5447248260771, neigh: ['oratorio', 'camilo-haddad'] },
    { station: 'sao-paulo-morumbi', name: 'Sao Paulo Morumbi', line: ['amarela'], lat: -23.5861368, lon: -46.7239121, neigh: ['butanta'] },
    { station: 'saude', name: 'Saude', line: ['azul'], lat: -23.6182458, lon: -46.6391896, neigh: ['praca-da-arvore', 'sao-judas'] },
    { station: 'se', name: 'Se', line: ['azul', 'vermelha'], lat: -23.5500992, lon: -46.635515, neigh: ['sao-bento', 'japao-liberdade', 'pedro-ii', 'anhangabau'] },
    { station: 'tamanduatei', name: 'Tamanduatei', line: ['verde'], lat: -23.5927867, lon: -46.5895167, neigh: ['sacoma', 'vila-prudente'] },
    { station: 'tatuape', name: 'Tatuape', line: ['vermelha'], lat: -23.5402524, lon: -46.5766424, neigh: ['carrao', 'belem'] },
    { station: 'tiradentes', name: 'Tiradentes', line: ['azul'], lat: -23.5311107, lon: -46.6326154, neigh: ['armenia', 'luz'] },
    { station: 'trianon-masp', name: 'Trianon Masp', line: ['verde'], lat: -23.5636427, lon: -46.6538374, neigh: ['consolacao', 'brigadeiro'] },
    { station: 'tucuruvi', name: 'Tucuruvi', line: ['azul'], lat: -23.48006945, lon: -46.6032409661715, neigh: ['parada-inglesa'] },
    { station: 'vergueiro', name: 'Vergueiro', line: ['azul'], lat: -23.5685349, lon: -46.6399175, neigh: ['sao-joaquim', 'paraiso'] },
    { station: 'vila-das-belezas', name: 'Vila Das Belezas', line: ['lilas'], lat: -23.6402476, lon: -46.7457694, neigh: ['campo-limpo', 'giovanni-gronchi'] },
    { station: 'vila-madalena', name: 'Vila Madalena', line: ['verde'], lat: -23.5464956, lon: -46.6911243, neigh: ['santuario-nossa-senhora-de-fatima-sumare'] },
    { station: 'vila-mariana', name: 'Vila Mariana', line: ['azul'], lat: -23.5891777, lon: -46.6346681, neigh: ['ana-rosa', 'santa-cruz'] },
    { station: 'vila-matilde', name: 'Vila Matilde', line: ['vermelha'], lat: -23.5319166, lon: -46.5308731, neigh: ['guilhermina-esperanca', 'penha'] },
    { station: 'vila-prudente', name: 'Vila Prudente', line: ['prata', 'verde'], lat: -23.5845945, lon: -46.5834369, neigh: ['oratorio', 'tamanduatei'] },
    { station: 'vila-tolstoi', name: 'Vila Tolstoi', line: ['prata'], lat: -23.60090245, lon: -46.5271210452192, neigh: ['camilo-haddad', 'vila-uniao'] },
    { station: 'vila-uniao', name: 'Vila Uniao', line: ['prata'], lat: -23.6029664, lon: -46.5155666533518, neigh: ['vila-tolstoi'] }
];


const lineColors = {
    'lilas': '#EEA1D8',
    'verde': '#4EA257',
    'azul': '#4180B6',
    'vermelha': '#FF5F5F',
    'prata': '#000000',
    'amarela': '#FFF267'
};

const graph = new Map();

function createGraph(stations) {
    stations.forEach(station => {
        graph.set(station.station, station.neigh);
    });
}

function shortestPath(start, end) {
    const queue = [start];
    const visited = new Set();
    const predecessor = {};

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === end) {
            const path = [];
            let step = end;
            while (step) {
                path.unshift(step);
                step = predecessor[step];
            }
            return path;
        }

        visited.add(current);

        const neighbors = graph.get(current);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                predecessor[neighbor] = current;
                queue.push(neighbor);
            }
        }
    }
    return null;
}



function getPathDetails(path) {
    const pathDetails = [];
    let currentLine = stations.find(station => station.station === path[0]).line[0];

    path.forEach((station, index) => {
        const stationInfo = stations.find(s => s.station === station);
        const nextStation = path[index + 1];
        let stationLine = stationInfo.line.find(line => line === currentLine) || stationInfo.line[0];

        if (nextStation) {
            const nextStationInfo = stations.find(s => s.station === nextStation);
            const nextLine = nextStationInfo.line.find(line => stationInfo.line.includes(line)) || stationInfo.line.find(line => line !== currentLine);
            if (nextLine !== currentLine) {
                currentLine = nextLine;
            }
        }

        pathDetails.push({ name: stationInfo.name, color: lineColors[stationLine] });
    });

    return pathDetails;
}

function calculatePath() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    createGraph(stations);
    const path = shortestPath(start, end);

    const resultElement = document.getElementById('result');
    if (path) {
        const pathDetails = getPathDetails(path);
        resultElement.innerHTML = `<h3>Shortest path:</h3><ul>${pathDetails.map(detail => `
            <li>
                <span class="station-color" style="background-color: ${detail.color};"></span>
                ${detail.name}
            </li>`).join('')}</ul>`;
        animatePath(path);
    } else {
        resultElement.innerHTML = 'No path found';
    }
}


function animatePath(path) {
    const circles = d3.selectAll('circle');
    let delay = 0;

    path.forEach(station => {
        circles.filter(d => d.station === station)
            .transition()
            .delay(delay)
            .duration(1000)
            .attr('r', 7)
            .attr('fill', '#FE5F55')
            .transition()
            .duration(1000)
            .attr('r', 4.3)
            .attr('fill', '#1BC1B5');
        delay += 220;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    function renderMap() {
        const mapContainer = document.getElementById('map');
        const width = mapContainer.clientWidth;
        const height = mapContainer.clientHeight;

        d3.select('#map').selectAll('*').remove();

        const svg = d3.select('#map').append('svg')
            .attr('width', width)
            .attr('height', height);

        const projection = d3.geoMercator()
            .center([-46.633308, -23.55052])
            .scale(Math.min(width, height) * 190)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        stations.forEach(station => {
            station.neigh.forEach(neighbor => {
                const neighborStation = stations.find(s => s.station === neighbor);
                svg.append('line')
                    .attr('x1', projection([station.lon, station.lat])[0])
                    .attr('y1', projection([station.lon, station.lat])[1])
                    .attr('x2', projection([neighborStation.lon, neighborStation.lat])[0])
                    .attr('y2', projection([neighborStation.lon, neighborStation.lat])[1])
                    .attr('stroke', lineColors[station.line[0]])
                    .attr('stroke-width', 2)
                    .attr('stroke-linecap', 'round');
            });
        });

        const circles = svg.selectAll('circle')
            .data(stations)
            .enter()
            .append('circle')
            .attr('cx', d => projection([d.lon, d.lat])[0])
            .attr('cy', d => projection([d.lon, d.lat])[1])
            .attr('r', 2)
            .attr('fill', '#000000')
            .attr('id', d => d.station)
            .style('pointer-events', 'none');
    }

    renderMap();

    window.addEventListener('resize', function() {
        renderMap();
    });

    const selectStart = document.getElementById('start');
    const selectEnd = document.getElementById('end');
    stations.forEach(station => {
        let option = new Option(station.name, station.station);
        selectStart.add(option.cloneNode(true));
        selectEnd.add(option);
    });

    selectStart.addEventListener('change', () => updateStationColors(selectStart.value, selectEnd.value));
    selectEnd.addEventListener('change', () => updateStationColors(selectStart.value, selectEnd.value));

    function updateStationColors(startStation, endStation) {
        const circles = d3.selectAll('circle');
        circles.attr('fill', d => {
            if (d.station === startStation) return '#E74C3C'; //red
            else if (d.station === endStation) return '#2ECC71'; //green
            return '#000000';
        }).attr('r', d => (d.station === startStation || d.station === endStation) ? 5 : 2);
    }
});
