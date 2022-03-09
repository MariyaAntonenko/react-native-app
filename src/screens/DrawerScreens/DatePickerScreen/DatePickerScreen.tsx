import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import DatePicker from 'react-native-date-picker';
import {Block} from '../../../common/simpleComponents/Block';
import {StyledText} from '../../../common/simpleComponents/Text';
import {StyledButton} from '../../../common/simpleComponents/Button';
import SadBabyIcon from '../../../assets/icons/sad-douding.svg';
import BirthdayCakeIcon from '../../../assets/icons/birthday-cake.svg';

export const DatePickerScreen = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());
  const [tooYoung, setTooYuong] = useState<boolean>(false);
  const [isDisableTimePicker, setDisableTimePicker] = useState<boolean>(true);
  const [openDateBirth, setOpenDateBirth] = useState<boolean>(false);
  const [openTimeBirth, setOpenTimeBirth] = useState<boolean>(false);
  const [isChanged, setChanged] = useState<boolean>(false);

  type DatePickerConstsItemTypes = {
    id: number;
    buttonText: string;
    openPickerState: boolean;
    date: Date;
    type: 'date' | 'time' | 'datetime' | undefined;
    textDate: string;
    activeButton: boolean;
    onPickDateFunction: (date: Date) => void;
    onCancelPicking: () => void;
    onOpenModal: () => void;
  };

  const datePickerConsts: DatePickerConstsItemTypes[] = [
    {
      id: 1,
      buttonText: 'Pick your birthday',
      openPickerState: openDateBirth,
      date: date,
      type: 'date',
      textDate: date.toDateString(),
      activeButton: false,
      onPickDateFunction: date => {
        setOpenDateBirth(false);
        const year = date.getFullYear();
        if (year > 2004) {
          setTooYuong(true);
          showMessage({
            message: 'You are too young',
            type: 'danger',
          });
          setChanged(false);
          setDisableTimePicker(true);
        } else {
          setTooYuong(false);
          setChanged(true);
          setDate(date);
          setDisableTimePicker(false);
          showMessage({
            message: 'You are so old!',
            type: 'success',
          });
        }
      },
      onCancelPicking: () => {
        setOpenDateBirth(false);
      },
      onOpenModal: () => {
        setOpenDateBirth(true);
      },
    },
    {
      id: 2,
      buttonText: 'Pick the time of your birth',
      openPickerState: openTimeBirth,
      date: time,
      type: 'time',
      textDate: time.toTimeString(),
      activeButton: isDisableTimePicker,
      onOpenModal: () => {
        setOpenTimeBirth(true);
      },
      onPickDateFunction: date => {
        setOpenTimeBirth(false);
        setChanged(true);
        setTime(date);
      },
      onCancelPicking: () => {
        setOpenTimeBirth(false);
      },
    },
  ];
  return (
    <Block
      flex={1}
      backgroundColor={'#2fbac4'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingVertical={'100px'}>
      {datePickerConsts.map(button => (
        <Block key={button.id}>
          <StyledButton
            disabled={button.activeButton}
            backgroundColor={'#F1CA4E'}
            onPress={button.onOpenModal}
            marginVertical={'20px'}
            border={'0.3px solid gray'}
            borderRadius={'6px'}
            paddingVertical={'10px'}
            paddingHorizontal={'10px'}>
            <StyledText
              color={'#DF4F7E'}
              fontSize={'16px'}
              textAlign={'center'}>
              {button.buttonText}
            </StyledText>
          </StyledButton>
          {isChanged && (
            <StyledText fontSize={'20px'}>{button.textDate}</StyledText>
          )}
          <DatePicker
            androidVariant={'iosClone'}
            minimumDate={new Date('1900-12-31')}
            mode={button.type}
            modal
            open={button.openPickerState}
            date={button.date}
            onConfirm={date => button.onPickDateFunction(date)}
            onCancel={button.onCancelPicking}
          />
        </Block>
      ))}
      <Block marginVertical={'100px'}>
        {tooYoung ? (
          <SadBabyIcon width={'240px'} height={'240px'} />
        ) : (
          <BirthdayCakeIcon width={'240px'} height={'240px'} />
        )}
      </Block>
    </Block>
  );
};
