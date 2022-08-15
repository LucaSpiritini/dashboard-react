export const userColumns = [{
    field: "id", headerName: "ID", width: 70
}, {
    field: "user", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="usernameCell">
                {params.row.username}
            </div>
        )
    }
}, {
    field: "email", headerName: "Email", width: 250
}, {
    field: "age", headerName: "Age", width: 100
}, {
    field: "about", headerName: "About", width: 200
}, {
    field: "status", headerName: "Status", width: 100, renderCell: (params) =>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }
}
];

export const userRows = [
    {
        "id": "1",
        "status": "pending",
        "img": "http://placehold.it/32x32",
        "age": 22,
        "username": "Tania Jacobs",
        "email": "taniajacobs@medalert.com",
        "phone": "+1 (965) 470-3492",
        "about": "Magna aute ut dolore enim est incididunt. Eiusmod deserunt fugiat ipsum ipsum. Consectetur amet ullamco adipisicing fugiat culpa velit aliquip laborum laborum est fugiat. Ea id aliquip qui sunt cillum laborum et aliqua laborum cillum sit. Duis consectetur occaecat aliquip eu ut non dolore quis eu minim id excepteur nulla proident. Excepteur cillum irure nostrud do proident sunt nisi exercitation fugiat ex nisi non.\r\n",
        "registered": "2014-07-29T04:46:57 +03:00"
    },
    {
        "id": "2",
        "status": "active",
        "img": "http://placehold.it/32x32",
        "age": 27,
        "username": "Tyson Buchanan",
        "email": "tysonbuchanan@medalert.com",
        "phone": "+1 (826) 560-3474",
        "about": "Magna est nostrud sit culpa. Pariatur ea Lorem occaecat dolor dolore occaecat deserunt adipisicing laborum adipisicing ipsum non ut. Do ad in deserunt fugiat qui officia enim in aliqua magna minim duis aliqua. Fugiat tempor eu aliqua veniam nisi Lorem nisi laboris. Consectetur irure fugiat mollit irure quis ullamco in quis nisi nulla irure ipsum cupidatat in.\r\n",
        "registered": "2015-07-02T02:38:29 +03:00"
    },
    {
        "id": "3",
        "status": "active",
        "img": "http://placehold.it/32x32",
        "age": 32,
        "username": "Augusta Sandoval",
        "email": "augustasandoval@medalert.com",
        "phone": "+1 (883) 452-2846",
        "about": "Eu consequat dolor qui id. Mollit dolore aliquip elit adipisicing fugiat velit do. Tempor est mollit do tempor velit ut magna sunt aute deserunt. Fugiat culpa quis proident minim commodo id culpa commodo. Enim exercitation commodo proident ullamco quis nostrud aliqua officia magna dolore nostrud Lorem dolor velit. Sint commodo enim quis dolor laborum ea.\r\n",
        "registered": "2017-11-20T12:04:06 +03:00"
    },
    {
        "id": "4",
        "status": "active",
        "img": "http://placehold.it/32x32",
        "age": 39,
        "username": "Wanda Whitfield",
        "email": "wandawhitfield@medalert.com",
        "phone": "+1 (885) 473-2913",
        "about": "Ad excepteur excepteur magna reprehenderit excepteur est excepteur in labore proident qui. Commodo quis exercitation dolor eiusmod. Ipsum velit aliqua laboris et velit proident. Duis eu mollit Lorem deserunt ut laboris non excepteur adipisicing. Qui cillum quis qui consectetur duis. Ut ut ipsum consequat sunt non magna ex quis esse duis laborum sint enim.\r\n",
        "registered": "2022-01-21T05:36:00 +03:00"
    },
    {
        "id": "5",
        "status": "active",
        "img": "http://placehold.it/32x32",
        "age": 31,
        "username": "Cunningham Cook",
        "email": "cunninghamcook@medalert.com",
        "phone": "+1 (850) 568-3034",
        "about": "Enim culpa ea ea consequat anim nostrud ut aliquip eu nisi. Magna veniam exercitation officia amet incididunt et voluptate aliqua ullamco do. Mollit ea quis fugiat eiusmod in consequat aute anim magna excepteur irure anim. Adipisicing pariatur aliquip sit nulla nisi velit est ullamco sint amet ea. Nulla mollit sit aliquip nostrud. Nulla quis veniam ad dolore tempor duis fugiat sit mollit cillum.\r\n",
        "registered": "2018-02-04T05:02:06 +03:00"
    },
    {
        "id": "6",
        "status": "passive",
        "img": "http://placehold.it/32x32",
        "age": 25,
        "username": "Sophia Blake",
        "email": "sophiablake@medalert.com",
        "phone": "+1 (801) 559-3443",
        "about": "Exercitation laboris duis dolore Lorem ad. Nostrud proident et ad anim duis officia. Sunt nisi dolor adipisicing exercitation dolor exercitation sit magna eu ad anim ullamco. Cillum culpa esse nulla consectetur et quis ullamco consequat duis elit duis aliqua. Ea pariatur ad sint reprehenderit ex culpa ullamco adipisicing.\r\n",
        "registered": "2015-12-12T03:57:46 +03:00"
    },
    {
        "id": "7",
        "status": "active",
        "img": "http://placehold.it/32x32",
        "age": 38,
        "username": "Tara Flowers",
        "email": "taraflowers@medalert.com",
        "phone": "+1 (896) 590-3822",
        "about": "Excepteur id Lorem cupidatat pariatur. Consectetur sunt elit ullamco voluptate mollit ipsum aliquip velit sint aute officia. Nulla velit exercitation culpa mollit occaecat aliqua ipsum est quis veniam tempor.\r\n",
        "registered": "2018-08-06T03:43:58 +03:00"
    },
    {
        "id": "8",
        "status": "passive",
        "img": "http://placehold.it/32x32",
        "age": 34,
        "username": "Edwards Jordan",
        "email": "edwardsjordan@medalert.com",
        "phone": "+1 (907) 470-2399",
        "about": "Elit laborum ad exercitation labore aliqua. Ex fugiat enim adipisicing sint pariatur aliquip do ad in ullamco incididunt est irure. Fugiat amet quis labore eiusmod.\r\n",
        "registered": "2015-06-11T11:20:46 +03:00"
    }
];