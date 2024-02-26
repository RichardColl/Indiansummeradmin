import { By } from '@angular/platform-browser';


export const getDebugElementText = debugElement => selector => {
    const nameElement: HTMLElement = debugElement.query(By.css(selector)).nativeElement;
    const text = nameElement.textContent.trim();
    return text;
};


