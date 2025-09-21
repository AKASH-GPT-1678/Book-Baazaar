import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const RatingsAndReviewsComponent = () => {
  // Sample review data
  const reviewsData = [
    {
      id: '1',
      rating: 4,
      title: 'Worth the money',
      review: 'Display is good.\nBattery is also good.\nBuild quality is decent.',
      reviewerName: 'Jeevan Reddy',
      isVerified: true,
      timeAgo: '1 year ago',
      likes: 69,
      dislikes: 19
    },
    {
      id: '2',
      rating: 5,
      title: 'Simply amazing',
      review: 'Product is excellent.\nsound quality is good.\nBattery backup is awesome.',
      reviewerName: 'Sonal Singh',
      isVerified: true,
      timeAgo: '8 months ago',
      likes: 45,
      dislikes: 7
    },
    {
      id: '3',
      rating: 4,
      title: 'Good value product',
      review: 'Nice smartwatch for the price.\nFeatures are working well.\nComfortable to wear.',
      reviewerName: 'Rahul Kumar',
      isVerified: true,
      timeAgo: '6 months ago',
      likes: 32,
      dislikes: 5
    },
    {
      id: '4',
      rating: 3,
      title: 'Average product',
      review: 'Display could be better.\nBattery lasts about a day.\nOverall okay for the price.',
      reviewerName: 'Priya Sharma',
      isVerified: false,
      timeAgo: '4 months ago',
      likes: 18,
      dislikes: 12
    },
    {
      id: '5',
      rating: 5,
      title: 'Excellent purchase',
      review: 'Very satisfied with this watch.\nAll features work perfectly.\nHighly recommended.',
      reviewerName: 'Amit Patel',
      isVerified: true,
      timeAgo: '3 months ago',
      likes: 56,
      dislikes: 3
    }
  ];

  const categoryRatings = [
    { category: 'Battery & Charger', rating: 4.0 },
    { category: 'Display', rating: 4.3 },
    { category: 'Design', rating: 4.3 },
    { category: 'Activity Tracking', rating: 3.9 },
    { category: 'Value for Money', rating: 3.9 },
    { category: 'Features', rating: 3.9 }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MaterialIcons
        key={index}
        name="star"
        size={16}
        color={index < rating ? '#22C55E' : '#E5E7EB'}
      />
    ));
  };

  const renderCategoryRating = ({ item, index }: { item: any; index: number }) => (
    <View style={[styles.categoryItem, index % 2 === 1 && styles.categoryItemRight]}>
      <Text style={styles.categoryName}>{item.category}</Text>
      <View style={styles.categoryRating}>
        <Text style={styles.categoryRatingText}>{item.rating}</Text>
        <MaterialIcons name="star" size={16} color="#22C55E" style={styles.categoryStarIcon} />
      </View>
    </View>
  );

  const renderReview = ({ item }: { item: any }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={styles.reviewRating}>
          <Text style={styles.reviewRatingText}>{item.rating}</Text>
          <MaterialIcons name="star" size={16} color="#22C55E" style={styles.reviewStarIcon} />
          <Text style={styles.reviewTitle}>{item.title}</Text>
        </View>
        <Text style={styles.reviewTime}>{item.timeAgo}</Text>
      </View>

      <Text style={styles.reviewText}>{item.review}</Text>

      <View style={styles.reviewFooter}>
        <View style={styles.reviewerInfo}>
          <Text style={styles.reviewerName}>{item.reviewerName}</Text>
          {item.isVerified && (
            <View style={styles.verifiedBadge}>
              <MaterialIcons name="verified" size={14} color="#666" />
              <Text style={styles.verifiedText}>Verified Buyer</Text>
            </View>
          )}
        </View>
        
        <View style={styles.reviewActions}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="like" size={16} color="#666" />
            <Text style={styles.actionText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign name="dislike" size={16} color="#666" />
            <Text style={styles.actionText}>{item.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ratings and reviews</Text>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="#666" />
      </View>

      {/* Overall Rating */}
      <View style={styles.overallRating}>
        <View style={styles.ratingScore}>
          <Text style={styles.ratingNumber}>4.2</Text>
          <MaterialIcons name="star" size={24} color="#22C55E" />
          <Text style={styles.ratingLabel}>Very Good</Text>
        </View>
        <Text style={styles.ratingSubtext}>
          based on 8,117 ratings by{' '}
          <MaterialIcons name="verified" size={16} color="#666" />
          Verified Buyers
        </Text>
      </View>

      {/* Category Ratings */}
      <View style={styles.categoryRatings}>
        <FlatList
          data={categoryRatings}
          renderItem={renderCategoryRating}
          keyExtractor={(item) => item.category}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.categoryGrid}
        />
      </View>

      {/* Reviews List */}
      <View style={styles.reviewsList}>
        <FlatList
          data={reviewsData}
          renderItem={renderReview}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>

      {/* Show All Reviews Button */}
      <TouchableOpacity style={styles.showAllButton}>
        <Text style={styles.showAllText}>Show all reviews</Text>
        <MaterialIcons name="chevron-right" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  overallRating: {
    marginBottom: 24,
  },
  ratingScore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 8,
  },
  ratingLabel: {
    fontSize: 18,
    color: '#22C55E',
    fontWeight: '600',
    marginLeft: 8,
  },
  ratingSubtext: {
    color: '#666',
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryRatings: {
    marginBottom: 24,
  },
  categoryGrid: {
    paddingHorizontal: 0,
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingRight: 16,
  },
  categoryItemRight: {
    paddingRight: 0,
    paddingLeft: 16,
  },
  categoryName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  categoryRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryRatingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryStarIcon: {
    marginLeft: 4,
  },
  reviewsList: {
    marginBottom: 16,
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reviewRatingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 4,
  },
  reviewStarIcon: {
    marginRight: 8,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  reviewTime: {
    fontSize: 14,
    color: '#666',
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: 2,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  reviewActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  actionText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  showAllButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginTop: 8,
  },
  showAllText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginRight: 4,
  },
});

export default RatingsAndReviewsComponent;