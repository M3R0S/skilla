export interface Partnership {
    id: string;
    name: string;
    brand_name: string;
    brand_ico: string;
    city: string;
    phone: string;
    email: string;
    adress: string;
    ur_adress: string;
    office_adress: string;
    inn: string;
    kpp: string;
    rs: string;
    bank: string;
    ks: string;
    bik: string;
    ogrn: string;
}

export interface Profile {
    id: string;
    name: string;
    surname: string;
    patronymic: string;
    login: string;
    phone: string;
    mango_phone: string;
    email: string;
    position: string;
    is_blocked: string;
    avatar: string;
    header_notice: {
        title: string;
        button_name: string;
        button_link: string;
    };
    partnership: Partnership;
}

