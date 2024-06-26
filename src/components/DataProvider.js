import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Orion-A 103C",
             "images": [
                "https://i.upanh.org/2022/08/28/tai-xung-1.jpg",
                "https://i.upanh.org/2022/08/28/tai-xung-2.jpg",
                "https://i.upanh.org/2022/08/28/tai-xung-3.jpg",
                "https://i.upanh.org/2022/08/28/tai-xung.jpg"
                 ],
             "description": "Đàn Orion Handmade A-103c có dáng A, cực phù hợp với các bạn chơi Finger Style",
             "content": "Đàn được làm từ gỗ nguyên tấm với mặt trước làm từ gỗ Thông (Spruce), hông và lưng làm từ gỗ Hồng đào (Mahogany).Đàn có khoảng cách dây (Action) thấp, dễ bấm và phù hợp cho người mới tập chơi guitarDáng khuyết giúp bạn chơi những nốt ở thế tay cao dễ dàng ",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 101,
             "count": 1
         },
         {
             "_id": "2",
             "title": "Orion A-203C",
             "images": [
                 "https://i.upanh.org/2022/08/28/tai-xung-187bf83657069e259.jpg",
                 "https://i.upanh.org/2022/08/28/images.jpg",
                 "https://i.upanh.org/2022/08/28/images-1.jpg",
                 "https://i.upanh.org/2022/08/28/tai-xungfdc8b1704a7b4923.jpg"
                 ],
             "description": "A - 203C là loại đàn tầm trung của Orion Guitar. Đàn Orion Handmade A-203C có dáng A, cực phù hợp với các bạn chơi Finger Style",
             "content": "Đàn được làm từ gỗ nguyên tấm với mặt trước làm từ gỗ Thông (Spruce), hông và lưng làm từ gỗ Hồng đào (Mahogany)            Đàn có khoảng cách dây (Action) thấp, dễ bấm và phù hợp cho người mới tập chơi guitar.Dáng khuyết giúp bạn chơi những nốt ở thế tay cao dễ dàng",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 102,
             "count": 1
         },
         {
             "_id": "3",
             "title": "Orion Classic TE-101",
             "images": [
                "https://i.upanh.org/2022/09/03/images-1.jpg",
                "https://i.upanh.org/2022/09/03/images.jpg",
                "https://i.upanh.org/2022/09/03/tai-xung-1.jpg",
                "https://i.upanh.org/2022/09/03/tai-xungf6822f859b8a767a.jpg"
                 ],
             "description": "Orion Classic TE- 101 là đàn dây nilon, một trong những sản phẩm được ưa chuộng nhất ở shop",
             "content": "Với kích thước nhỏ hơn đàn guitar thường 1 chút: size 3/4.Có thể dùng đi du lịch, hay cho những người cơ thể nhỏ nhắn hoặc trẻ em.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 103,
             "count": 1

         },
         {
             "_id": "4",
             "title": "Orion HD-103",
             "images": [
                "https://i.upanh.org/2022/09/04/images-3.jpg",
                "https://i.upanh.org/2022/09/04/tai-xunge8f593eb5e4f357e.jpg",
                "https://i.upanh.org/2022/09/04/images-109f956adddf8b637.jpg",
                "https://i.upanh.org/2022/09/04/images7e1d1e04a3fde268.jpg"
                 ],
             "description": "Đàn Orion HD-103 là một trong những dòng đàn được ưa chuộng nhất trong những sản phẩm của Orion Guitar, phù hợp với các bạn chơi đệm hát",
             "content": "Đàn được làm từ gỗ nguyên tấm với mặt trước làm từ gỗ Thông (Spruce), hông và lưng làm từ gỗ Hồng đào (Mahogany).",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 104,
             "count": 1

         },
         {
             "_id": "5",
             "title": "Orion A-103C",
             "images": [
                "https://i.upanh.org/2022/09/04/tai-xung-4.jpg",
                "https://i.upanh.org/2022/09/04/tai-xung-2815eeb74f90a3824.jpg",
                "https://i.upanh.org/2022/09/04/tai-xung-12f4ac96651b78ce3.jpg",
                 "https://i.upanh.org/2022/08/28/tai-xungfdc8b1704a7b4923.jpg"
                 ],
             "description": "Đàn Orion Handmade A-103c có dáng A, cực phù hợp với các bạn chơi Finger Style.",
             "content": "Đàn được làm từ gỗ nguyên tấm với mặt trước làm từ gỗ Thông (Spruce), hông và lưng làm từ gỗ Hồng đào (Mahogany) Đàn có khoảng cách dây (Action) thấp, dễ bấm và phù hợp cho người mới tập chơi guitar, Dáng khuyết giúp bạn chơi những nốt ở thế tay cao dễ dàng .",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 105,
             "count": 1

         },
         {
             "_id": "6",
             "title": "orion-a-430c",
             "images": [
                "https://i.upanh.org/2022/09/04/tai-xung-3.jpg",
                "https://i.upanh.org/2022/09/04/tai-xung-2278dd05c72714dd8.jpg",
                "https://i.upanh.org/2022/09/04/tai-xung-1fb0de890d681f09e.jpg",
                "https://i.upanh.org/2022/09/04/tai-xungdf88cb9d2dcd949b.jpg"
                 ],
             "description": "A-430 là dòng đàn chất lượng cao của Orion.",
             "content": "Dáng A kích thước không quá lớn, có âm thanh cộng hưởng vang, kết hợp với action đàn tiêu chuẩn nên đặc biệt phù hợp với các bạn mới chơi và tập chơi Finger Style.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 106,
             "count": 1

         },
         {
             "_id": "7",
             "title": "Orion C-450",
             "images": [
                "https://img.upanh.tv/2022/09/04/tai-xung-3fb52f32f8f9877e8.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-2.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-1.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xunge47a6b5faae6b78d.jpg"
                 ],
             "description": "Classic C-450 là một trong những dòng đàn classic handmade chất lượng tốt.",
             "content": "Đàn được làm toàn bộ bằng gỗ nguyên tấm. Mặt đàn được làm bằng gỗ nguyên miếng: gỗ Thông (Spruce 2A) , lưng và hông được làm từ gỗ nguyên miếng Điệp (India Rosewood 3A) cho âm thanh cực vang sâu, tiếng đàn ngân rộng.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 107,
             "count": 1

         },
         {
             "_id": "8",
             "title": "Guitar Classic C1200",
             "images": [
                "https://i.upanh.org/2022/08/28/images.jpg",
                 "https://i.upanh.org/2022/08/28/images-1.jpg",
                 "https://i.upanh.org/2022/08/28/tai-xung-187bf83657069e259.jpg",
                 "https://i.upanh.org/2022/08/28/tai-xungfdc8b1704a7b4923.jpg"
                 ],
             "description": "Classic C-1200 là một trong những dòng đàn classic handmade cao cấp của thương hiệu đàn Orion handmade.",
             "content": "Đàn được làm toàn bộ bằng gỗ nguyên tấm full KOA (Hawaii) cho âm thanh cực vang sâu, tiếng đàn ngân rộng. Đàn được khảm trai rất tỉ mỉ với họa tiết tinh xảo, ngựa lược được làm handmade bằng xương, tặng kèm case cao cấp.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 108,
             "count": 1

         },
         {
             "_id": "9",
             "title": "Ukulele Hawaii Koa",
             "images": [
                "https://img.upanh.tv/2022/09/04/tai-xung-38cad9295f275d6e6.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-2c16dd87e762073b4.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-15551844e861629b2.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung9ac0de753234184f.jpg"
                 ],
             "description": "Đàn handmade Ukulele cao cấp của thương hiệu Orion Toàn bộ đàn được làm bằng gỗ nguyên tấm: gỗ Koa chất lượng cao, vân gỗ đẹp. Âm thanh vang sang, vui nhộn.",
             "content": "Đàn được làm tỉ mỉ đến từng chi tiết với ngựa lược được làm bằng xương, khóa vàng đẹp mắt.Dây đàn Italy cao cấp đi kèm.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 109,
             "count": 1

         },
         {
             "_id": "10",
             "title": "Ukulele U-201",
             "images": [
                "https://img.upanh.tv/2022/09/04/images.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-2665f4d43ca9cf353.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung-1ae0eac06aca3fed1.jpg",
                "https://img.upanh.tv/2022/09/04/tai-xung59dcbf718ea95d12.jpg"
                 ],
             "description": "Ukulele U-201 handmade là loại đàn tầm trung, được nhiều người ưa thích vì âm thanh vang, sự tiện dụng và sự thoải mái khi cầm chơi cây đàn.",
             "content": "Đàn được làm bằng toàn bộ gỗ nguyên miếng chất lượng tốt.Mặt đàn được làm bằng gỗ nguyên miếng: gỗ Thông (Spruce), lưng và hông được làm từ gỗ nguyên tấm:gỗ Hồng đào (Mahogany). Ngựa lược đàn được làm bằng xương.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 110,
             "count": 1

         },
         {
             "_id": "11",
             "title": "Ukulele U-202",
             "images": [
                 "https://img.upanh.tv/2022/09/05/images.jpg",
                 "https://img.upanh.tv/2022/09/05/small.deviser-uk-24-501.png",
                 "https://img.upanh.tv/2022/09/05/8600efe0955a298177019a8ccdad7bc7.jpg",
                 "https://img.upanh.tv/2022/09/05/ac32bc178da01ae05c148cee1f0c3f88.jpg"
                 ],
             "description": "Ukulele U-202 handmade là loại đàn tầm trung,được nhiều người ưa thích vì âm thanh vang, sự tiện dụng và sự thoải mái khi cầm chơi cây đàn.",
             "content": "Đàn được làm bằng toàn bộ gỗ nguyên miếng chất lượng tốt. Đàn được làm hoàn toàn từ gỗ Hồng Đào (Mahogany). Ngựa lược đàn được làm bằng xương.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 111,
             "count": 1

         },
         {
             "_id": "12",
             "title": "Orion A-830C",
             "images": [
                "https://img.upanh.tv/2022/09/05/tai-xung.jpg",
                "https://img.upanh.tv/2022/09/05/tai-xung-2.jpg",
                "https://img.upanh.tv/2022/09/05/tai-xung-1.jpg",
                "https://img.upanh.tv/2022/09/05/tai-xung-3.jpg"
                 ],
             "description": "A-850C là một trong những dòng đàn handmade cao cấp của thương hiệu Orion, đàn dáng A phù hợp cho người chơi đệm hát hay finger style.",
             "content": "Đàn được làm toàn bộ bằng gỗ nguyên miếng cao cấp. Mặt đàn là gỗ nguyên tấm nhập khẩu Thông cao cấp (Sitka Spruce 3A), lưng và hông đàn được làm từ gỗ nguyên tấm nhập khẩu Cẩm ấn cao cấp (India Rosewood 3A) Đàn có ngựa lược đàn bằng xương được làm handmade rất tỉ mỉ. dây D’Addario EXP USA kèm đàn cao cấp và bao da 3 lớp kèm đàn. Đàn được khảm trai tỉ mỉ với họa tiết tinh xảo.",
             "ship" :"Vận chuyển đàn toàn quốc. Liên hệ 0989.681997 Địa chỉ: Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận HBT - HN",
             "price": 112,
             "count": 1

         }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("Đã thêm vào giỏ hàng")
        }
    }

    const buyCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }
    }
    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        buyCart: buyCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
