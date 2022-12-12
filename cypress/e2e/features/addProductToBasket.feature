Feature: Ürünlerin Başarılı Bir Şekilde Sepete Eklenmesi

    Belirli bir kategoriye ait ürünlerin En Çok Beğenilen sıralaması yapılarak sepete eklenmesi

Scenario: Anasayfanın Başarılı Bir Şekilde Açılması
    Given Anasayfanın açılması
    Then Sayfa title değerinin kontrol edilmesi
    Then Anasayfada logonun görüntülenmesi

Scenario Outline: Belirli Bir Kategoriye Ait Alt Kategorinin Seçilmesi
    Given '<mainCategory>' kategorisine hover işlemi yapılır
    When '<subCategory>' alt kategorisine tıklanır
    Then '<subCategory>' kategorisine ait ürün listesinin açıldığının kontrol edilmesi
    Then Breadcrumbdaki son itemde '<subCategory>' kategorisi yazdığının görülmesi

    Examples:
        | mainCategory | subCategory |
        | Sofra | Yemek Takımları |

Scenario: Ürün Listesinde Beğeniye Göre Sıralama Yapılması
    Given Ürün sıralama listesine tıklanır
    When Sıralama listesinden En Çok Beğenilen seçeneğine tıklanır
    Then Aktif sıralama seçeneğinin En Çok Beğenilen olduğunun kontrolü
    Then Sayfa url değerindeki parametrenin kontrol edilmesi


Scenario Outline: <quantity> Adet Ürünün Sepete Eklenmesi
    Given <quantity> adet ürün bilgisinin dosyaya yazılması
    When <quantity> adet ürünün sepete eklenmesi
    Then Header alanında sepetteki ürün sayısı <quantity> kadar olmalıdır

    Examples:
        | quantity |
        | 2 |

Scenario: Sepet Sayfasında Eklenen Ürünlerin Kontrol Edilmesi
    Given Sepete Git butonuna tıklanır
    Then Sepetteki ürün bilgileri kontrol edilir
