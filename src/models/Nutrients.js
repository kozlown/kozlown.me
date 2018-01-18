import axios from 'axios'

export default aliment => new Promise((resolve, reject) => {
  const alimCode = aliment.alim_code.trim()
  const alimName = aliment.alim_nom_eng.trim()

  axios.get(`http://109.238.11.174:3001/${alimCode}/nutrients`)
    .then(({ data }) => {
      const nutrient = const_code => Math.round(
        parseFloat(data.find(element => element.const_code.trim() === const_code)
          .teneur
          .replace(',','.')
        ) * 10
      ) / 10 || 0

      const nutrients =  {
        name: alimName,
        quantity: 100,
        carbohydrate: {
          sugar: nutrient('32000'),
          total: nutrient('31000')
        },
        lipid: {
          SFA: nutrient('40302'),
          o3: nutrient('41833') + nutrient('42053') + nutrient('42263'),
          o6: nutrient('41826') + nutrient('42046'),
          o9: nutrient('41819'),
          total: nutrient('40000')
        },
        protein: nutrient('25000'),
        salt: nutrient('10004'),
        energy: nutrient('328')
      }

      resolve(nutrients)
    })
})