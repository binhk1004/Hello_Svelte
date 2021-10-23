import { writable } from 'svelte/store';

export let storeName = writable('Hello');
//위와 같이 지정을 해서 밖으로 내보내는 변수는 외부에서 수정이 불가하기 때문에 
//writable을 사용하여 외부에서 수정이 가능하게 설정

