import { getCSS, tickConfig } from "./common.js"
async function quantidadeUsuariosPorEsportes() {
    const url = 'https://raw.githubusercontent.com/gabrielrosa19/ciencia-de-dados-3c/refs/heads/main/base-de-dados/esportes-mais-praticados.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosEsportes = Object.keys(dados)
    const QuantidadeDeJogadores = Object.values(dados)

    const data = [
        {
            x: nomeDosEsportes,
            y: QuantidadeDeJogadores,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Esportes Com Mais Jogadores',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome dos Esportes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de Jogadores Ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorEsportes()