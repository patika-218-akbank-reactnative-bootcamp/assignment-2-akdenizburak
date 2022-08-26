
//mock data generator ile oluşturulmuştur
const ChatList = [
    {
        "id": 1,
        "receiver": {
            "id": 1,
            "first_name": "Cassondra",
            "last_name": "Oakeby",
            "avatar": require("../assets/images/avatar1.jpg")
        },
        "messages": [
            {
                "text": "Donec vitae nisi.",
                "datetime": "23:43"
            },
            {
                "text": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
                "datetime": "0:43"
            },
            {
                "text": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
                "datetime": "17:10"
            }
        ]
    },
    {
        "id": 2,
        "receiver": {
            "id": 2,
            "first_name": "Salomon",
            "last_name": "Bissell",
            "avatar": require("../assets/images/avatar2.jpg")
        },
        "messages": [
            {
                "text": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
                "datetime": "1:07"
            }
        ]
    },
    {
        "id": 3,
        "receiver": {
            "id": 3,
            "first_name": "Kale",
            "last_name": "Bagnall",
            "avatar": require("../assets/images/avatar3.jpg")
        },
        "messages": [
            {
                "text": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
                "datetime": "14:52"
            },
            {
                "text": "Fusce posuere felis sed lacus.",
                "datetime": "20:42"
            },
            {
                "text": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
                "datetime": "21:20"
            },
            {
                "text": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
                "datetime": "5:32"
            },
            {
                "text": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
                "datetime": "16:18"
            },
            {
                "text": "Fusce posuere felis sed lacus.",
                "datetime": "16:05"
            }
        ]
    },
    {
        "id": 4,
        "receiver": {
            "id": 4,
            "first_name": "Izaak",
            "last_name": "Constanza",
            "avatar": require("../assets/images/avatar4.jpg")
        },
        "messages": [
            {
                "text": "Vivamus vel nulla eget eros elementum pellentesque.",
                "datetime": "3:33"
            },
            {
                "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
                "datetime": "13:01"
            },
            {
                "text": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
                "datetime": "3:08"
            },
            {
                "text": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
                "datetime": "2:15"
            }
        ]
    },
    {
        "id": 5,
        "receiver": {
            "id": 5,
            "first_name": "Che",
            "last_name": "Peak",
            "avatar": require("../assets/images/avatar5.jpg")
        },
        "messages": [
            {
                "text": "Fusce posuere felis sed lacus.",
                "datetime": "4:19"
            },
            {
                "text": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
                "datetime": "18:58"
            },
            {
                "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
                "datetime": "2:22"
            }
        ]
    },
    {
        "id": 6,
        "receiver": {
            "id": 6,
            "first_name": "Angelita",
            "last_name": "Musico",
            "avatar": require("../assets/images/avatar6.jpg")
        },
        "messages": [
            {
                "text": "Donec ut mauris eget massa tempor convallis.",
                "datetime": "18:46"
            },
            {
                "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
                "datetime": "23:42"
            },
            {
                "text": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                "datetime": "10:58"
            },
            {
                "text": "Pellentesque at nulla. Suspendisse potenti.",
                "datetime": "20:53"
            },
            {
                "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                "datetime": "21:29"
            }
        ]
    },
    {
        "id": 7,
        "receiver": {
            "id": 7,
            "first_name": "Micah",
            "last_name": "Northage",
            "avatar": require("../assets/images/avatar7.jpg")
        },
        "messages": [
            {
                "text": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
                "datetime": "3:59"
            }
        ]
    },
    {
        "id": 8,
        "receiver": {
            "id": 8,
            "first_name": "Nero",
            "last_name": "Bluschke",
            "avatar": require("../assets/images/avatar8.jpg")
        },
        "messages": [
            {
                "text": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
                "datetime": "6:41"
            },
            {
                "text": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
                "datetime": "16:38"
            },
            {
                "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
                "datetime": "9:05"
            },
            {
                "text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
                "datetime": "17:30"
            },
            {
                "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
                "datetime": "3:33"
            }
        ]
    },
    {
        "id": 9,
        "receiver": {
            "id": 9,
            "first_name": "Flory",
            "last_name": "Terren",
            "avatar": require("../assets/images/avatar9.jpg")
        },
        "messages": [
            {
                "text": "Fusce consequat.",
                "datetime": "13:57"
            },
            {
                "text": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
                "datetime": "14:47"
            },
            {
                "text": "Proin at turpis a pede posuere nonummy. Integer non velit.",
                "datetime": "3:56"
            },
            {
                "text": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
                "datetime": "2:19"
            },
            {
                "text": "Phasellus sit amet erat. Nulla tempus.",
                "datetime": "12:54"
            },
            {
                "text": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
                "datetime": "14:09"
            }
        ]
    },
    {
        "id": 10,
        "receiver": {
            "id": 10,
            "first_name": "Helsa",
            "last_name": "Jzhakov",
            "avatar": require("../assets/images/avatar10.jpg"),
        },
        "messages": [
            {
                "text": "Aliquam erat volutpat. In congue. Etiam justo.",
                "datetime": "17:09"
            },
            {
                "text": "Proin eu mi.",
                "datetime": "5:02"
            },
            {
                "text": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
                "datetime": "16:38"
            },
            {
                "text": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
                "datetime": "8:17"
            },
            {
                "text": "Aenean sit amet justo. Morbi ut odio.",
                "datetime": "7:01"
            },
            {
                "text": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
                "datetime": "19:15"
            },
            {
                "text": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
                "datetime": "16:48"
            }
        ]
    }
]

export default ChatList;