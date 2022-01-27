export const selectSwitch= (key)=>{
 switch (key) {
    case "All": return 'http://35.180.205.240:5000/api/products/'
    case "Cold Snaks":return 'http://35.180.205.240:5000/api/products/filter?categories=cold snaks,coldSnaks'
    case "Soup": return 'http://35.180.205.240:5000/api/products/filter?categories=soup'
    case "Salads": return 'http://35.180.205.240:5000/api/products/filter?categories=salads'
    case "Desert": return 'http://35.180.205.240:5000/api/products/filter?categories=desert'
    case "Hot Snaks": return 'http://35.180.205.240:5000/api/products/filter?categories=hot snaks'

    default:
        return "dispatch(getUrl('http://35.180.205.240:5000/api/products/"
}
}