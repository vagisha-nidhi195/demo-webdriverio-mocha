describe('Winapppppppp', () => {
    before(() => {      
    });

    it('Winapp test', async () => {
        const element  = await $('.//*//ComboBox') 
    
        element.click()
        browser.pause(10000)

        browser.refresh()
        const pageSource = await browser.getPageSource()
        console.log(pageSource)
        const elem = await $('[name="United Kingdom"]')
        elem.click()
    });
});
