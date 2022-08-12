class ProcesaComanda {
    constructor(comensales, cantCafe, cantCafeCortado, cantCafeJarrito,
        cantCafeJarritoCortado, cantCafeConLeche, cantAguaSgas, cantAguaCgas,
        cantCocaCola, cantCocaColaL, cantSprite, cantSpriteL, cantFanta, cantTonica,
        cantMediaLunas, cantTostado, cantChipa, cantTarta, cantBrownie, cantCeliacos,
        cantPromo1, cantPromo2, cantPromo3, cantPromo4) {
        this.comensales = comensales;

        this.cantCafe = cantCafe;
        this.totalCafe = cantCafe * 120;

        this.cantCafeCortado = cantCafeCortado;
        this.totalCafeCortado = cantCafeCortado * 120;

        this.cantCafeJarrito = cantCafeJarrito;
        this.totalCafeJarrito = cantCafeJarrito * 150;
        
        this.cantCafeJarritoCortado = cantCafeJarritoCortado;
        this.totalCafeJarritoCortado = cantCafeJarritoCortado * 150;
        
        this.cantCafeConLeche = cantCafeConLeche;
        this.totalCafeConLeche = cantCafeConLeche * 180;

        this.cantAguaSgas = cantAguaSgas;
        this.totalAguaSgas = cantAguaSgas * 120;

        this.cantAguaCgas = cantAguaCgas;
        this.totalAguaCgas = cantAguaCgas * 120;

        this.cantCocaCola = cantCocaCola;
        this.totalCocaCola = cantCocaCola * 120;

        this.cantCocaColaL = cantCocaColaL;
        this.totalCocaColaL = cantCocaColaL * 120;

        this.cantSprite = cantSprite;
        this.totalSprite = cantSprite * 120;

        this.cantSpriteL = cantSpriteL;
        this.totalSpriteL = cantSpriteL * 120;

        this.cantFanta = cantFanta;
        this.totalFanta = cantFanta * 120;

        this.cantTonica = cantTonica;
        this.totalTonica = cantTonica * 120;

        this.cantMediaLunas = cantMediaLunas;
        this.totalMediaLunas = cantMediaLunas * 100;

        this.cantTostado = cantTostado;
        this.totalTostado = cantTostado * 150;

        this.cantChipa = cantChipa;
        this.totalChipa = cantChipa * 100;

        this.cantTarta = cantTarta;
        this.totalTarta = cantTarta * 160;

        this.cantBrownie = cantBrownie;
        this.totalBrownie = cantBrownie * 160;

        this.cantCeliacos = cantCeliacos;
        this.totalCeliacos = cantCeliacos * 160;

        this.cantPromo1 = cantPromo1;
        this.totalPromo1 = cantPromo1 * 300;

        this.cantPromo2 = cantPromo2;
        this.totalPromo1 = cantPromo1 * 320;

        this.cantPromo3 = cantPromo3;
        this.totalPromo1 = cantPromo1 * 350;

        this.cantPromo4 = cantPromo4;
        this.totalPromo1 = cantPromo1 * 350;
    }
}