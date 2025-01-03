export function FormatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR' 
    }).format(amount);
}
