import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import DishCard from '../../components/Dish-Card'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/Header-Perfil'
import HeroPerfil from '../../components/Hero'

import {
  selectContentModal,
  selectModal
} from '../../store/modal/modal.selector'
import { Dish } from '../Home'
import { useGetRestaurantQuery } from '../../service/api'

import close from '../../assets/images_efood/close 1.png'

import * as S from './perfil.style'
import { setModal } from '../../store/modal/modal.reducer'

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Perfil = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)

  const contentModal = useSelector(selectContentModal)
  const modal = useSelector(selectModal)

  const handleModal = () => {
    dispatch(setModal(false))
  }

  if (restaurant) {
    return (
      <>
        <>
          <HeaderPerfil />
          <HeroPerfil restaurant={restaurant} />
          <S.DishesContainer>
            {restaurant?.cardapio.map((dish: Dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </S.DishesContainer>
          <Footer />
        </>
        <S.ModalContainer modal={modal.toString()}>
          <S.ModalContent>
            <S.CloseContainer onClick={handleModal}>
              <img src={close} alt="close icon" />
            </S.CloseContainer>
            <img src={contentModal.foto} />
            <S.InfoContainer>
              <h3>{contentModal.nome}</h3>
              <p>{contentModal.descricao}</p>
              <S.PortionSpan>Serve: de {contentModal.porcao}</S.PortionSpan>
              <S.AddtoCart>
                Adicionar ao carrinho - {formatPrice(contentModal.preco)}
              </S.AddtoCart>
            </S.InfoContainer>
          </S.ModalContent>
          <div onClick={handleModal} className="overlay"></div>
        </S.ModalContainer>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Perfil
