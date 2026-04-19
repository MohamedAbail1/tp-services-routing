import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

    const router = inject(Router);
    const isLogging = !!localStorage.getItem('token');

    if(isLogging){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
};