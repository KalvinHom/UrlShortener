defmodule UrlShortener.ShortUrls.SlugGenerator do
    use(Puid, bits: 64, charset: :alphanum) #64 bits of entropy for alhpanumeric slug
end