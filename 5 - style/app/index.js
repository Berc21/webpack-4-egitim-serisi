import './index.scss'

// fecth

fetch('build-tools.json').then( 
  (resp) => resp.json() ).then( (arr) => {
     const dataArray = arr.data 
     dataArray.map((element) => {


      const templateMarkup = `
      <li style="list-style-type: none; padding: 16px 24px; margin: 16px; background: #EEF9FF; color:black; border-radius: 5px;" ">
      <section style="display: flex;">
        <header style="max-width: 200px; width:100%; padding: 24px 48px; margin-right: 40px; border-radius: 10px; margin-top: 20px; background: #1B78BF; ">
            <img style="max-width: 200px; width: 100%; max-height: 100px height: auto;" src="${element.logo}" alt="${element.name}">
        </header>

      <main>
          <h3 >${element.name}</h3>
          <p> ${ element.info } </p>
      </main>
      </section>
      <footer  style="text-align: center; margin-top: 20px;" >
        <a  target="_blank" style="color: inherit; text-decoration: none; padding: 10px 20px; border: 1px solid #1B78BF;"  href="${element.homepage}">Homepage</a>
      </footer>

      </li>
      `

        document.getElementById('tool-list').insertAdjacentHTML('afterbegin', templateMarkup)
     })
  });



