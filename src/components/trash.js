// componentWillMount() {
    

//     this.keyboardWillShowSub = Keyboard.addListener(
//       "keyboardWillShow",
//       this.keyboardWillShow
//     );
//     this.keyboardWillHideSub = Keyboard.addListener(
//       "keyboardWillHide",
//       this.keyboardWillHide
//     );

//     this.keyboardDidShowSub = Keyboard.addListener(
//       "keyboardDidShow",
//       this.keyboardWillShow
//     );
//     this.keyboardDidHideSub = Keyboard.addListener(
//       "keyboardDidHide",
//       this.keyboardWillHide
//     );
//   }

//   componentWillUnmount() {
//     this.keyboardWillShowSub.remove();
//     this.keyboardWillHideSub.remove();
//     this.keyboardDidShowSub.remove();
//     this.keyboardDidHideSub.remove();
//   }

//   keyboardWillShow = event => {
//     if (Platform.OS == "android") {
//       duration = 100;
//     } else {
//       duration = event.duration;
//     }
//     Animated.parallel([
//       Animated.timing(this.state.formPosition, {
//         duration: duration,
//         toValue: -hp("5.25%")
//       }),
//       Animated.timing(this.state.animatedTitleTopMargin, {
//         duration: duration,
//         toValue: 0
//       }),
//       Animated.timing(this.state.animatedTitleSize, {
//         duration: duration,
//         toValue: 50
//       })
//     ]).start();
//   };

//   keyboardWillHide = event => {
//     if (Platform.OS == "android") {
//       duration = 100;
//     } else {
//       duration = event.duration;
//     }
//     Animated.parallel([
//       Animated.timing(this.state.formPosition, {
//         duration: duration,
//         toValue: 0
//       }),
//       Animated.timing(this.state.animatedTitleTopMargin, {
//         duration: duration,
//         toValue: 20
//       }),
//       Animated.timing(this.state.animatedTitleSize, {
//         duration: duration,
//         toValue: 70
//       })
//     ]).start();
//   };