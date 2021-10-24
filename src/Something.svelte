<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

    let name = 'something..';
    let h1

    function moredot() {
        name += '.';
    };

    beforeUpdate(() => {
        console.log('Before Update!');
        console.log(h1 && h1.innerText);
    });

    afterUpdate(() => {
        console.log('After Update!');
        console.log(h1.innerText);
    })

    onMount(() => {
        console.log('Mounted!');
        h1 = document.querySelector('h1');
    });

    onDestroy(() => {
        console.log('Destroy')
    });
</script>

<h1 on:click={moredot}>{name}</h1>