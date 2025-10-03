import { StyleSheet, Text, View,TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import axios from 'axios';
import { ENV } from '@/data/ENV';
import LoadingScreen from '@/components/loadingScreen';
import ProductNotFound from '@/components/productNotfound';
import { OrderResponseDto } from "../../../bookbackend/src/product/dto/order-response.dto";
import { Image } from 'react-native';

const Orders = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<OrderResponseDto[] | null>(null);
  const loadMyOrders = async () => {
    setLoading(true);
    setError(false);

    try {
      if (!isLoggedIn || !token) {
        throw new Error("User must be logged in");
      }

      const response = await axios.get(`${ENV.BASE_URL}/api/product/load/orders`, {
        headers: {

          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.order);
      console.log(response.data);
    } catch (err) {
      console.error("Error loading orders:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  React.useEffect(() => {


    loadMyOrders();
  }, [token]);
  const renderOrderItem = (item: OrderResponseDto) => (
    <View key={item.id} style={styles.orderCard}>
      <View style={styles.orderContent}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.bookImage}
            resizeMode="cover"
          />
        </View>

      
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

          <Text style={styles.author} numberOfLines={1}>
            by {item.author}
          </Text>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>

          <Text style={styles.description} numberOfLines={3}>
            {item.description}
          </Text>

          <View style={styles.bottomRow}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceSymbol}>₹</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.conditionBadge}>
              <Text style={styles.conditionText}>{item.condition}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // UI Rendering
  if (loading) return <LoadingScreen />;
  if (error) return <ProductNotFound />;


 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Orders</Text>
        <Text style={styles.orderCount}>{data?.length || 0} items</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {data && data.length > 0 ? (
          data.map((item) => renderOrderItem(item))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No orders found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2874F0',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  orderCount: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    marginVertical: 4,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  orderContent: {
    flexDirection: 'row',
    padding: 12,
  },
  imageContainer: {
    width: 100,
    height: 140,
    marginRight: 12,
  },
  bookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#F0F0F0',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 4,
  },
  author: {
    fontSize: 13,
    color: '#878787',
    marginBottom: 6,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    marginBottom: 6,
  },
  categoryText: {
    fontSize: 11,
    color: '#F57C00',
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: '#878787',
    lineHeight: 16,
    marginBottom: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceSymbol: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212121',
    marginLeft: 2,
  },
  conditionBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
  },
  conditionText: {
    fontSize: 11,
    color: '#388E3C',
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  viewDetailsButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#F0F0F0',
  },
  viewDetailsText: {
    fontSize: 14,
    color: '#2874F0',
    fontWeight: '600',
  },
  trackButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  trackText: {
    fontSize: 14,
    color: '#2874F0',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#878787',
  },
});