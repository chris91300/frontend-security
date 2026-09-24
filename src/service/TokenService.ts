class TokenService{

    private key = "token";

    save(token: string){
        localStorage.setItem(this.key, token);
    }

    get(){
        return localStorage.getItem(this.key);
    }

    clear(){
        localStorage.removeItem(this.key);
    }
}

export const tokenService = new TokenService();
