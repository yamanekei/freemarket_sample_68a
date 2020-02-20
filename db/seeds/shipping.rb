# 送料込み(出品者負担)
buyer = Shipping.create(name: "送料込み(出品者負担)")
buyer_1 = buyer.children.create(name: "未定") 
buyer_2 = buyer.children.create(name: "ゆうメール")
buyer_3 = buyer.children.create(name: "レターパック")
buyer_4 = buyer.children.create(name: "普通郵便(定形、定形外)")
buyer_5 = buyer.children.create(name: "クロネコヤマト")
buyer_6 = buyer.children.create(name: "ゆうパック")

# 着払い(購入者負担)
owner = Shipping.create(name: "着払い(購入者負担)")
owner_1 = owner.children.create(name: "未定")
owner_2 = owner.children.create(name: "クロネコヤマト")
owner_3 = owner.children.create(name: "ゆうパック")
owner_4 = owner.children.create(name: "ゆうメール")