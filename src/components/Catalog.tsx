import "../styles/globals.css"
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Mock data for categories and products
const categories = [
  { id: 1, name: 'Res'},
  { id: 2, name: 'Pollo'},
  { id: 3, name: 'Premium'},
  { id: 4, name: 'Cerdo'},
  { id: 5, name: 'Preparados'},
]

const products = [
    {
      id: 3887120770,
      categoryId: 5,
      name: 'Alas',
      price: 5.55,
      image: '/pics/products/ALAS.jpg'
    },
    {
      id: 3872956845,
      categoryId: 2,
      name: 'Alas BBQ',
      price: 7.2,
      image: '/pics/products/ALAS BBQ.jpg'
    },
    {
      id: 3871241070,
      categoryId: 3,
      name: 'Asado de Tira',
      price: 14.91,
      image: '/pics/products/ASADO DE TIRA.jpg'
    },
    {
      id: 3868395825,
      categoryId: 1,
      name: 'Bistec',
      price: 15.58,
      image: '/pics/products/BISTEC.jpg'
    },
    {
      id: 3875178556,
      categoryId: 3,
      name: 'Brisket',
      price: 19.29,
      image: '/pics/products/BRISKET.jpg'
    },
    {
      id: 3866384646,
      categoryId: 5,
      name: 'Brocheta de Cerdo',
      price: 14.61,
      image: '/pics/products/BROCHETA DE CERDO.jpg'
    },
    {
      id: 3885513990,
      categoryId: 5,
      name: 'Brocheta de Pollo',
      price: 15.16,
      image: '/pics/products/BROCHETA DE POLLO.jpg'
    },
    {
      id: 3887491373,
      categoryId: 5,
      name: 'Brocheta de Solomo',
      price: 21.9,
      image: '/pics/products/BROCHETA DE SOLOMO.jpg'
    },
    {
      id: 3885050169,
      categoryId: 5,
      name: 'Brocheta Mixta',
      price: 19.04,
      image: '/pics/products/BROCHETA MIXTA.jpg'
    },
    {
      id: 3860721983,
      categoryId: 3,
      name: 'Cecina',
      price: 19.29,
      image: '/pics/products/CECINA.jpg'
    },
    {
      id: 3860876901,
      categoryId: 1,
      name: 'Chocozuela',
      price: 14.98,
      image: '/pics/products/CHOCOZUELA.jpg'
    },
    {
      id: 3858710884,
      categoryId: 4,
      name: 'Chuleta Ahumada',
      price: 12.99,
      image: '/pics/products/CHULETA AHUMADA.jpg'
    },
    {
      id: 3852209560,
      categoryId: 4,
      name: 'Chuleta de Cerdo',
      price: 12.85,
      image: '/pics/products/CHULETA DE CERDO.jpg'
    },
    {
      id: 3869944331,
      categoryId: 2,
      name: 'Churrasco',
      price: 9.52,
      image: '/pics/products/CHURRASCO.jpg'
    },
    {
      id: 3888107437,
      categoryId: 5,
      name: 'Cordon Bleu',
      price: 21.04,
      image: '/pics/products/CORDON BLEU.jpg'
    },
    {
      id: 3884586863,
      categoryId: 1,
      name: 'Costilla',
      price: 7.78,
      image: '/pics/products/COSTILLA.jpg'
    },
    {
      id: 3866694721,
      categoryId: 4,
      name: 'Costilla Nacional',
      price: 13.1,
      image: '/pics/products/COSTILLA NACIONAL.jpg'
    },
    {
      id: 3885050170,
      categoryId: 3,
      name: 'Cowboy',
      price: 19.99,
      image: '/pics/products/COWBOY.jpg'
    },
    {
      id: 3866229679,
      categoryId: 4,
      name: 'Cubos de Cerdo',
      price: 14.49,
      image: '/pics/products/CUBOS DE CERDO.jpg'
    },
    {
      id: 3888107439,
      categoryId: 3,
      name: 'Entraña',
      price: 19.29,
      image: '/pics/products/ENTRAÑA.jpg'
    },
    {
      id: 3887336354,
      categoryId: 3,
      name: 'Flat Iron',
      price: 19.29,
      image: '/pics/products/FLAT IRON.jpg'
    },
    {
      id: 3863906636,
      categoryId: 1,
      name: 'Ganso',
      price: 14.98,
      image: '/pics/products/GANSO.jpg'
    },
    {
      id: 3862560403,
      categoryId: 1,
      name: 'Guisar',
      price: 13.18,
      image: '/pics/products/GUISAR.jpg'
    },
    {
      id: 3855306530,
      categoryId: 5,
      name: 'Hamburguesa de Brisket',
      price: 11.88,
      image: '/pics/products/HAMBURGUESA DE BRISKET.jpg'
    },
    {
      id: 3886441629,
      categoryId: 3,
      name: 'Kansas City',
      price: 18.85,
      image: '/pics/products/KANSAS CITY.jpg'
    },
    {
      id: 3859021078,
      categoryId: 1,
      name: 'Lagarto c/h',
      price: 7.78,
      image: '/pics/products/LAGARTO C/H.jpg'
    },
    {
      id: 3855769647,
      categoryId: 1,
      name: 'Lomito',
      price: 17.92,
      image: '/pics/products/LOMITO.jpg'
    },
    {
      id: 3868862331,
      categoryId: 1,
      name: 'Mechar',
      price: 13.18,
      image: '/pics/products/MECHAR.jpg'
    },
    {
      id: 3873946785,
      categoryId: 5,
      name: 'Medallones',
      price: 14.94,
      image: '/pics/products/MEDALLONES.jpg'
    },
    {
      id: 3887491371,
      categoryId: 5,
      name: 'Medallones de Pollo',
      price: 17.57,
      image: '/pics/products/MEDALLONES DE POLLO.jpg'
    },
    {
      id: 3866849402,
      categoryId: 3,
      name: 'Medallones de Res',
      price: 16.35,
      image: '/pics/products/MEDALLONES DE RES.jpg'
    },
    {
      id: 3861483441,
      categoryId: 2,
      name: 'Milanesa',
      price: 9.6,
      image: '/pics/products/MILANESA.jpg'
    },
    {
      id: 3869324809,
      categoryId: 5,
      name: 'Milanesa Empanizada',
      price: 11.52,
      image: '/pics/products/MILANESA EMPANIZADA.jpg'
    },
    {
      id: 3884586861,
      categoryId: 1,
      name: 'Molida',
      price: 13.18,
      image: '/pics/products/MOLIDA.jpg'
    },
    {
      id: 3871848884,
      categoryId: 1,
      name: 'Molida Magra',
      price: 15.58,
      image: '/pics/products/MOLIDA MAGRA.jpg'
    },
    {
      id: 3851899236,
      categoryId: 1,
      name: 'Muchacho Redondo',
      price: 14.98,
      image: '/pics/products/MUCHACHO REDONDO.jpg'
    },
    {
      id: 3884586862,
      categoryId: 2,
      name: 'Muslo',
      price: 5.1,
      image: '/pics/products/MUSLO.jpg'
    },
    {
      id: 3887798031,
      categoryId: 5,
      name: 'Nuggets',
      price: 14.52,
      image: '/pics/products/NUGGETS.jpg'
    },
    {
      id: 3852519087,
      categoryId: 5,
      name: 'Pallar Res',
      price: 16.35,
      image: '/pics/products/PALLAR RES.jpg'
    },
    {
      id: 3866384647,
      categoryId: 2,
      name: 'Pechuga c/h',
      price: 6.9,
      image: '/pics/products/PECHUGA C/H.jpg'
    },
    {
      id: 3870099558,
      categoryId: 2,
      name: 'Pechuga Molida',
      price: 10.56,
      image: '/pics/products/PECHUGA MOLIDA.jpg'
    },
    {
      id: 3860876902,
      categoryId: 2,
      name: 'Pechuga s/h',
      price: 8.4,
      image: '/pics/products/PECHUGA S/H.jpg'
    },
    {
      id: 3871386241,
      categoryId: 1,
      name: 'Pollo de Res',
      price: 15.58,
      image: '/pics/products/POLLO DE RES.jpg'
    },
    {
      id: 3887643209,
      categoryId: 2,
      name: 'Pollo Entero',
      price: 4.28,
      image: '/pics/products/POLLO ENTERO.jpg'
    },
    {
      id: 3863750679,
      categoryId: 2,
      name: 'Pollo Picado',
      price: 5.48,
      image: '/pics/products/POLLO PICADO.jpg'
    },
    {
      id: 3860721986,
      categoryId: 5,
      name: 'Pollo Relleno',
      price: 21.76,
      image: '/pics/products/POLLO RELLENO.jpg'
    },
    {
      id: 3873111378,
      categoryId: 4,
      name: 'Porchetta Cruda',
      price: 30,
      image: '/pics/products/PORCHETTA CRUDA.jpg'
    },
    {
      id: 3862560404,
      categoryId: 4,
      name: 'Pork Belly Nacional',
      price: 13.2,
      image: '/pics/products/PORK BELLY NACIONAL.jpg'
    },
    {
      id: 3866229678,
      categoryId: 3,
      name: 'Porter House',
      price: 24.21,
      image: '/pics/products/PORTER HOUSE.jpg'
    },
    {
      id: 3874255521,
      categoryId: 1,
      name: 'Pulpa Negra',
      price: 14.98,
      image: '/pics/products/PULPA NEGRA.jpg'
    },
    {
      id: 3887952699,
      categoryId: 3,
      name: 'Rib Eye',
      price: 22.28,
      image: '/pics/products/RIB EYE.jpg'
    },
    {
      id: 3875178554,
      categoryId: 5,
      name: 'Roastbeef',
      price: 20.98,
      image: '/pics/products/ROASTBEEF.jpg'
    },
    {
      id: 3861483442,
      categoryId: 3,
      name: 'Short Rib',
      price: 19.29,
      image: '/pics/products/SHORT RIB.jpg'
    },
    {
      id: 3869944333,
      categoryId: 1,
      name: 'Solomo AA',
      price: 19.18,
      image: '/pics/products/SOLOMO AA.jpg'
    },
    {
      id: 3873111379,
      categoryId: 1,
      name: 'Strogonoff',
      price: 15.58,
      image: '/pics/products/STROGONOFF.jpg'
    },
    // {
    //   id: 3865920517,
    //   categoryId: 2,
    //   name: 'Stroganoff',
    //   price: 10.56,
    //   image: '/pics/products/STROGONOFF.jpg'
    // },
    {
      id: 3872956846,
      categoryId: 3,
      name: 'T-Bone',
      price: 24.87,
      image: '/pics/products/T-BONE.jpg'
    },
    {
      id: 3851899238,
      categoryId: 5,
      name: 'Tender',
      price: 11.52,
      image: '/pics/products/TENDER.jpg'
    },
    {
      id: 3875178555,
      categoryId: 3,
      name: 'Tomahawk',
      price: 19.95,
      image: '/pics/products/TOMAHAWK.jpg'
    },
    {
      id: 3871848882,
      categoryId: 3,
      name: 'Top Sirloin',
      price: 22.28,
      image: '/pics/products/TOP SIRLOIN.jpg'
    },
    {
      id: 3860721985,
      categoryId: 3,
      name: 'Vacío',
      price: 17.13,
      image: '/pics/products/VACÍO.jpg'
    }
  ]

const onErrorImage = (currentTarget: any) => {
  
    currentTarget.onerror = null;
    currentTarget.target.src = "/pics/404.png";
}

export default function ResponsiveProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id.toString())
  const [isMounted, setIsMounted] = useState(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('Category') && parseInt(urlParams.get('Category')!.toString()) > 0 && parseInt(urlParams.get('Category')!.toString()) <= categories.length){
      setSelectedCategory(urlParams.get('Category')!.toString());
    }
    
    setTimeout(() => {
      setIsMounted(true)
    },500);
  }, [])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  const renderCategorySelector = () => {
    if (!isMounted) return null // Prevent SSR mismatch

    if (isSmallScreen) {
      return (
        <Carousel className="w-full h-full max-w-xs mx-auto mb-6">
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.id}>
                <Card 
                  className={`cursor-pointer ${selectedCategory === category.id.toString() ? 'border-white' : ''}`}
                  onClick={() => handleCategoryChange(category.id.toString())}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="w-full text-center">
                        <span>{category.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    } else {
      return (
        <TabsList className="grid h-full w-full grid-cols-5 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id.toString()} className="text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center sm:justify-start p-2 sm:p-4">
              <div className="w-full text-center">
                <span>{category.name}</span>
            </div>
            </TabsTrigger>
          ))}
        </TabsList>
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {
        !isMounted && 
        <div className='flex w-screen h-screen justify-center mt-[250px]'>
          <span className={"Loader"}></span>
        </div>
      }
      {
        isMounted &&
        <>
          <h1 className="Logo text-6xl md:text-8xl lg:text-9xl text-white mb-6 text-center">Productos</h1>
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
            {renderCategorySelector()}
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id.toString()}>
                <Card className='bgi'>
                  <CardHeader></CardHeader>
                  <CardContent>
                    <ScrollArea className="h-full w-full">
                      <div className="grid grid-cols-1 justify-evenly sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ">
                        {products
                          .filter((product) => product.categoryId === parseInt(selectedCategory))
                          .map((product) => (
                            <Card key={product.id} className="flex flex-col justify-between">
                              <CardContent className="p-4">
                                <div className="aspect-square relative mb-2">
                                  <img onError={onErrorImage}
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full text-muted-foreground h-full object-cover rounded-md"
                                  />
                                </div>
                                <h3 className="text-lg mb-1">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </>
      }
    </div>
  )
}