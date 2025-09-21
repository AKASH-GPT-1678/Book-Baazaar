import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons';

const DeliveryDetailsComponent = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.header}>Delivery details</Text>
      

      <TouchableOpacity style={styles.addressContainer}>
        <View style={styles.addressContent}>
          <MaterialIcons name="home" size={20} color="#666" style={styles.icon} />
          <View style={styles.addressText}>
            <Text style={styles.addressTitle}>HOME</Text>
            <Text style={styles.addressSubtitle}>Krishna store mumbra samrat nagar...</Text>
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={20} color="#666" />
      </TouchableOpacity>

 
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryHeader}>
          <MaterialIcons name="local-shipping" size={20} color="#666" style={styles.icon} />
          <Text style={styles.deliveryTitle}>Delivery by 24 Sep, Wed</Text>
        </View>
        <Text style={styles.countdownText}>Order in 00h 17m 32s</Text>
      </View>

    
      <View style={styles.fulfilledContainer}>
        <View style={styles.fulfilledHeader}>
          <Ionicons name="cube-outline" size={20} color="#666" style={styles.icon} />
          <Text style={styles.fulfilledTitle}>Fulfilled by RetailNet</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.3 ⭐ • 9 years with Flipkart</Text>
        </View>
      </View>


      <View style={styles.warrantyContainer}>
        <View style={styles.warrantyContent}>
          <View style={styles.noiseBrand}>
            <Text style={styles.noiseText}>NOISE</Text>
          </View>
          <Text style={styles.warrantyText}>1 Year Warranty from the date of purchase</Text>
        </View>
      </View>

      
      <View style={styles.featuresContainer}>
        {/* 7-day brand support */}
        <TouchableOpacity style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <Feather name="rotate-ccw" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.featureTitle}>7-day</Text>
          <View style={styles.featureSubtitle}>
            <Text style={styles.featureText}>brand support</Text>
            <MaterialIcons name="chevron-right" size={14} color="#666" style={styles.chevronSmall} />
          </View>
        </TouchableOpacity>

   
        <TouchableOpacity style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <MaterialIcons name="credit-card-off" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.featureTitle}>No cash</Text>
          <View style={styles.featureSubtitle}>
            <Text style={styles.featureText}>on delivery</Text>
            <MaterialIcons name="chevron-right" size={14} color="#666" style={styles.chevronSmall} />
          </View>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.featureItem}>
          <View style={styles.featureIcon}>
            <MaterialIcons name="verified-user" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.featureTitle}>Flipkart</Text>
          <View style={styles.featureSubtitle}>
            <Text style={styles.featureText}>Assured</Text>
            <MaterialIcons name="chevron-right" size={14} color="#666" style={styles.chevronSmall} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  addressContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  addressText: {
    flex: 1,
  },
  addressTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 16,
  },
  addressSubtitle: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  deliveryContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  deliveryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  deliveryTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 16,
  },
  countdownText: {
    color: '#F97316',
    fontSize: 14,
    marginLeft: 32,
  },
  fulfilledContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  fulfilledHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fulfilledTitle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 16,
  },
  ratingContainer: {
    marginLeft: 32,
  },
  ratingText: {
    color: '#666',
    fontSize: 14,
  },
  warrantyContainer: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  warrantyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noiseBrand: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
  },
  noiseText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  warrantyText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    flex: 1,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#EFF6FF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  featureSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  icon: {
    marginRight: 12,
  },
  chevronSmall: {
    marginLeft: 4,
  },
});

export default DeliveryDetailsComponent;