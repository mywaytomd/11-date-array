const dateChecker = (dates) => {
    const pureDates = dates.filter(el => {
        if(typeof el !== 'string') return false

        if(el.includes('/')){
            const splitedDate = el.split('/')

            if(splitedDate.length !== 3) return false

            let [month, day, year] = splitedDate

            day = Number(day)
            month= Number(month)
            year = Number(year)

            if(month > 12 || month < 1) return  false

            if(day < 1 || day > 31) return false

            return true

        }

        if(el.includes('-')){
            const splitedDate = el.split('-')


            if(splitedDate.length !== 3) return false

            let [day, month, year] = splitedDate

            day = Number(day)
            month= Number(month)
            year = Number(year)

            if(month > 12 || month < 1) return  false

            if(day < 1 || day > 31) return false

            return true

        }
    })

    const properFormatDates =  pureDates.map((el) => {
                if(el.includes('/')){
                    const splitedDate = el.split('/')
                    const [month, day, year] = splitedDate
                    return [day, month, year].join('-')
                }
                return el
    })
    return properFormatDates
}