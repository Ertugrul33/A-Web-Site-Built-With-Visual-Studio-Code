function Types(link) {
    $.ajax({
        url: "https://www.teasource.com/pages/" + link,
        method: "REDIRECT"
    }).done(function (data) {
        console.log(data);
    });
}

function Molecule(link2) {
    $.ajax({
        url: "https://www.google.com.tr/search?q=tea+molecule&tbm=isch&ved=2ahUKEwiUg5OF2KTmAhWJ76QKHeJ0CaMQ2-cCegQIABAA&oq=tea+molecul&gs_l=img.1.0.0i19l3j0i5i30i19l2j0i8i30i19.556209.559713..561269...2.0..0.151.1380.7j6......0....1..gws-wiz-img.......0i67j0j0i30j0i8i30j0i5i30.JmCBcQ-WglI&ei=UjXsXZSSKYnfkwXi6aWYCg&bih=625&biw=1366#imgrc=" + link2,
        method: "REDIRECT"
    }).done(function (data) {
        console.log(data);
    });
}

function Info(link3) {
    $.ajax({
        url: "https://teahow.com/" + link3,
        method: "REDIRECT"
    }).done(function (data) {
        console.log(data);
    });
}