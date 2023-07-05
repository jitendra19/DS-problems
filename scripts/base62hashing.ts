//python program

// def to_base_62(deci):
//     s = '012345689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     hash_str = ''
//     while deci > 0 and len(hash_str) <= 7:
//         val = int(deci % 62)
//         hash_str= s[val] + hash_str
//         deci = int(deci / 62)
//     if len(hash_str) < 7: 
//         hash_str = hash_str.zfill(7)
//     return hash_str
  
// print(to_base_62(9998978998123412352353423498))
// print(to_base_62(1))
// print(to_base_62(99989))
// print(to_base_62(112))
// print(to_base_62(115432342))
// print(to_base_62(11543234212312))

# Javascript solution
function to_base_62(deci) {
    const s = '012345689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    hash_str = ''
    while(deci > 0) {
        hash_str= s[parseInt(deci % 62)] + hash_str;
        deci = parseInt(deci/ 62)
    }
    console.log(hash_str)
}
to_base_62(999)
to_base_62(999123123)
to_base_62(9991232341)
to_base_62(99913412412341)
to_base_62(9991)
to_base_62(9123199)
to_base_62(129129129)


